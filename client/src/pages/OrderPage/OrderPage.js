import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import PropTypes from 'prop-types'

import { allMenuItems } from '../../graphql/queries/allMenuItems'
import { createOrder } from '../../graphql/mutations/createOrder'

import MenuItem from './MenuItem'
import ContentArea from '../../components/ContentArea'

class OrderPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      discountCards: 0,
      remark: '',
      menuItems: undefined,
      totalQty: 0,
      total: 0,
      isMessage: false,
      messageText: '',
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    // to only submit ordered items to the db
    const orderedMenuItems = this.state.menuItems.filter(item => {
      return item.qty !== 0
    })
    /*
    `menuItems` arg in `createOrder` and `editOrder` expects a stringified
    array of objects with `name`, `price`, `qty`, `category` and `foodId`
    */
    const menuItems = JSON.stringify(orderedMenuItems)
    const { name, discountCards, remark, totalQty, total } = this.state
    this.props
      .createOrder({
        variables: {
          name,
          totalQty,
          total,
          discountCards,
          remark,
          menuItems,
        },
      })
      .then(() => this.displayMessage('The order was updated succesfully 🎉'))
      .catch(error => {
        console.error(error)
        this.displayMessage(error.message)
      })
    this.setState({
      name: '',
      discountCards: 0,
      remark: '',
      menuItems: undefined,
      totalQty: 0,
      total: 0,
    })
  }

  handleChangeMenuItem = e => {
    let totalQty = 0
    let total = 0
    // to get foodId from input
    const targetId = e.target.name.split('-')[1]
    const updatedMenuItems = this.state.menuItems.map(item => {
      // to calculate how many items ordered, and total cost of the order
      if (item.qty !== 0 && item.foodId !== targetId) {
        totalQty += Number(item.qty)
        total += Number(item.qty) * Number(item.price)
      } else if (item.foodId === targetId) {
        totalQty += Number(Number(e.target.value))
        total += Number(Number(e.target.value)) * Number(item.price)
      }
      // to only alter the correct box -> return target value if id matches, else return unaltered item
      return item.foodId === targetId
        ? { ...item, qty: Number(e.target.value) }
        : item
    })
    this.setState({
      totalQty,
      total,
      menuItems: updatedMenuItems,
    })
  }

  displayMessage = messageText => {
    this.setState({ isMessage: true, messageText })
    setTimeout(() => {
      this.setState({ isMessage: false, messageText: '' })
    }, 4000)
  }

  render () {
    // Only 1 call to db for all menu item info
    let data = this.props.allMenuItems
    if (!data.loading && !this.state.menuItems && data.allMenuItems) {
      let filteredData = data.allMenuItems.map(item => {
        // not using rest {..item} so we can rename _id to foodId
        return {
          name: item.name,
          price: item.price,
          category: item.category,
          foodId: item._id,
          qty: 0,
        }
      })
      this.setState({ menuItems: filteredData })
    }
    const {
      name,
      discountCards,
      remark,
      menuItems,
      totalQty,
      total,
      isMessage,
      messageText,
    } = this.state

    return (
      <ContentArea>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type='text'
              name='name'
              onChange={this.handleChange}
              value={name}
            />
          </label>
          <label>
            Coupons
            <input
              type='number'
              name='discountCards'
              min='0'
              onChange={this.handleChange}
              value={discountCards}
            />
          </label>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Qty</th>
              </tr>
              {menuItems !== undefined ? (
                <React.Fragment>
                  <MenuItem
                    category='soup'
                    menuItems={menuItems}
                    menuItemChange={this.handleChangeMenuItem}
                  />
                  <MenuItem
                    category='adult'
                    menuItems={menuItems}
                    menuItemChange={this.handleChangeMenuItem}
                  />
                  <MenuItem
                    category='child'
                    menuItems={menuItems}
                    menuItemChange={this.handleChangeMenuItem}
                  />
                </React.Fragment>
              ) : (
                <tr>
                  <td>Loading menu items...</td>
                </tr>
              )}
            </tbody>
          </table>
          <div>
            <label>
              <div>
                Total items ordered: <span>{totalQty}</span>
              </div>
            </label>
            <label>
              <div>
                Total: <span>{total}</span>
              </div>
            </label>
            <label>
              Remark:
              <textarea
                type='number'
                name='remark'
                rows='4'
                cols='30'
                onChange={this.handleChange}
                value={remark}
              />
            </label>
            <div>
              <button type='submit'>Submit </button>
              <button
                type='reset'
                onClick={() =>
                  this.setState({
                    name: '',
                    discountCards: 0,
                    remark: '',
                    menuItems: undefined,
                    totalQty: 0,
                    total: 0,
                  })
                }
              >
                Reset
              </button>
            </div>
            {isMessage ? <div>{messageText}</div> : null}
          </div>
        </form>
      </ContentArea>
    )
  }
}

OrderPage.propTypes = {
  allMenuItems: PropTypes.object,
  createOrder: PropTypes.any,
}

export default compose(
  graphql(allMenuItems, { name: 'allMenuItems' }),
  graphql(createOrder, { name: 'createOrder' })
)(OrderPage)
