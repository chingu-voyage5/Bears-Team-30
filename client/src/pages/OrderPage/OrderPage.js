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
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    let totalQty = 0
    let total = 0
    const orderedMenuItems = this.state.menuItems.filter(item => {
      if (item.qty !== 0) {
        totalQty += Number(item.qty)
        total += Number(item.qty) * Number(item.price)
      }
      return item.qty !== 0
    })
    /*
    `menuItems` arg in `createOrder` and `editOrder` expects a stringified
    array of objects with `name`, `price`, `qty`, `category` and `foodId`
    */
    const menuItems = JSON.stringify(orderedMenuItems)
    const { name, discountCards, remark } = this.state
    this.props.createOrder({
      variables: {
        name,
        totalQty,
        total,
        discountCards,
        remark,
        menuItems,
      },
    })
    this.setState({
      name: '',
      discountCards: 0,
      remark: '',
      menuItems: undefined,
    })
  }

  handleChangeMenuItem = e => {
    // to get foodId from input
    const targetId = e.target.name.split('-')[1]
    const updatedMenuItems = this.state.menuItems.map(
      item =>
        // to only alter the correct box -> return target value if id matches, else return unaltered item
        item.foodId === targetId
          ? { ...item, qty: Number(e.target.value) }
          : item
    )
    this.setState({ menuItems: updatedMenuItems })
  }

  render () {
    const { name, discountCards, remark, menuItems } = this.state
    // Only 1 call to db for all menu item info
    let data = this.props.allMenuItems
    if (!data.loading && !this.state.menuItems) {
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
          <label>
            Remark
            <textarea
              type='number'
              name='remark'
              rows='4'
              cols='30'
              onChange={this.handleChange}
              value={remark}
            />
          </label>
          <button type='submit'>Submit</button>
          <button
            type='reset'
            onClick={() =>
              this.setState({
                name: '',
                discountCards: 0,
                remark: '',
                menuItems: undefined,
              })
            }
          >
            Reset
          </button>
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
