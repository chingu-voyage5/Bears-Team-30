import { gql } from 'apollo-boost'

export const createOrder = gql`
  mutation(
    $name: String!
    $remark: String
    $menuItems: String!
    $qty: Int!
    $discountCards: Int
    $total: Float!
  ) {
    createOrder(
      name: $name
      remark: $remark
      menuItems: $menuItems
      qty: $qty
      discountCards: $discountCards
      total: $total
    ) {
      name
      _id
    }
  }
`
