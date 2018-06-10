import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { allMenuItemsQuery, createOrderMutation } from '../../queries'

class OrderPage extends Component {
  constructor (props) {
    super(props)
    this.state = {}
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
    this.props.createOrderMutation({
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
    let data = this.props.allMenuItemsQuery

    /// ///////////////////////////////////////////////////////////////////////////////
    // MAP FROM ALL ITEMS TO ORGANIZE, INSTEAD OF MAKING MULTIPLE QUERIES TO THE DB //
    /// ///////////////////////////////////////////////////////////////////////////////

    const adultMenuItems = data.loading
      ? null
      : data.allMenuItems
        .filter(item => item.category === 'adult')
        .map(item => {
          return (
            <tr key={item._id}>
              <td>Adult {item.name}</td>
              <td>{item.price}</td>
              <td>
                <input type='number' name='qty' min='0' defaultValue='0' />
              </td>
            </tr>
          )
        })

    const childMenuItems = data.loading
      ? null
      : data.allMenuItems
        .filter(item => item.category === 'child')
        .map(item => {
          return (
            <tr key={item._id}>
              <td>Child {item.name}</td>
              <td>{item.price}</td>
              <td>
                <input type='number' name='qty' min='0' defaultValue='0' />
              </td>
            </tr>
          )
        })

    const soupMenuItem = data.loading
      ? null
      : data.allMenuItems.filter(item => item.category === 'soup').map(item => {
        return (
          <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
              <input type='number' name='qty' min='0' defaultValue='0' />
            </td>
          </tr>
        )
      })

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Qty</th>
              </tr>
              {data.loading ? (
                <tr>
                  <td>Loading menu items..</td>
                </tr>
              ) : (
                soupMenuItem
              )}
              {data.loading ? (
                <tr>
                  <td>Loading menu items..</td>
                </tr>
              ) : (
                adultMenuItems
              )}
              {data.loading ? (
                <tr>
                  <td>Loading menu items..</td>
                </tr>
              ) : (
                childMenuItems
              )}
            </tbody>
          </table>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

/// //////////////////////////
// PROP-TYPES WILL GO HERE //
/// //////////////////////////

export default compose(
  graphql(allMenuItemsQuery, { name: 'allMenuItemsQuery' }),
  graphql(createOrderMutation, { name: 'createOrderMutation' })
)(OrderPage)
