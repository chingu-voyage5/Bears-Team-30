import { gql } from 'apollo-boost'

export const allOrders = gql`
  {
    allOrders {
      _id
      name
      remark
      menuItems {
        foodId
        name
        price
        category
        qty
      }
      totalQty
      tableNumber
      discountCards
      total
      orderedAt
      scannedAt
      deliveredAt
      satus
    }
  }
`
