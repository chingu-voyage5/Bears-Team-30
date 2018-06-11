import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import PropTypes from 'prop-types'

import { allMenuItemsQuery, createOrderMutation } from '../../queries'
import MenuItem from './MenuItem'

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
    // Only 1 call to db for menu item info
    let data = this.props.allMenuItemsQuery

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
              {data.loading ? null : (
                <React.Fragment>
                  <MenuItem category='soup' data={data} />
                  <MenuItem category='adult' data={data} />
                  <MenuItem category='child' data={data} />
                </React.Fragment>

              )}
            </tbody>
          </table>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

OrderPage.propTypes = {
  allMenuItemsQuery: PropTypes.object,
  createOrderMutation: PropTypes.function,
}

export default compose(
  graphql(allMenuItemsQuery, { name: 'allMenuItemsQuery' }),
  graphql(createOrderMutation, { name: 'createOrderMutation' })
)(OrderPage)
