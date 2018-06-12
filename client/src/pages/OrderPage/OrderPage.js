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
    this.state = { customerName: '', discountCards: 0, remark: '' }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('SUBMITTED!')
    /*
    `menuItems` arg in `createOrder` and `editOrder` expects a stringified
    array of objects with `name`, `price`, `qty`, `category` and `foodId`
    */

    /// //////////////////////////////////////
    // HARD CODED ORDER CREATION TEST DATA //
    /// //////////////////////////////////////
    const menuItems = JSON.stringify([
      {
        name: 'Chicken Curry',
        price: 16,
        qty: 1,
        category: 'adult',
        foodId: '5b1c9ee017c12677ecbf9262',
      },
    ])
    const total = 16
    const qty = 1
    const name = 'John Doe'
    const discountCards = 0
    this.props.createOrder({
      variables: {
        name,
        qty,
        total,
        // discountCards, // <-- this is required for some reason
        menuItems,
      },
    })
  }

  render () {
    // Only 1 call to db for menu item info
    let data = this.props.allMenuItems

    return (
      <ContentArea>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type='text'
              name='customerName'
              onChange={this.handleChange}
              value={this.state.customerName}
            />
          </label>
          <label>
            Coupons
            <input
              type='number'
              name='discountCards'
              min='0'
              defaultValue='0'
              onChange={this.handleChange}
              value={this.state.discountCards}
            />
          </label>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Qty</th>
              </tr>
              {data.loading ? null : (
                <React.Fragment>
                  <MenuItem category='soup' data={data} />
                  <MenuItem category='adult' data={data} />
                  <MenuItem category='child' data={data} />
                </React.Fragment>
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
              value={this.state.remark}
            />
          </label>
          <button type='submit'>Submit</button>
          <button
            type='reset'
            onClick={() =>
              this.setState({ customerName: '', discountCards: 0, remark: '' })
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
  createOrder: PropTypes.function,
}

export default compose(
  graphql(allMenuItems, { name: 'allMenuItems' }),
  graphql(createOrder, { name: 'createOrder' })
)(OrderPage)
