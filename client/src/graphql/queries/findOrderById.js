import { gql } from 'apollo-boost'

export const findOrderById = gql`
  query($id: ID!) {
    findMenuItemById(_id: $id) {
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
