import { gql } from 'apollo-boost'

export const createOrder = gql`
  mutation(
    $name: String!
    $remark: String
    $menuItems: String!
    $totalQty: Int!
    $discountCards: Int
    $total: Float!
  ) {
    createOrder(
      name: $name
      remark: $remark
      menuItems: $menuItems
      totalQty: $totalQty
      discountCards: $discountCards
      total: $total
    ) {
      name
      _id
    }
  }
`
