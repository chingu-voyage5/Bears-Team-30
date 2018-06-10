import { gql } from 'apollo-boost'

const allMenuItemsQuery = gql`
  {
    allMenuItems {
      _id
      name
      price
      category
    }
  }
`

const findMenuItemByIdQuery = gql`
  query($id: ID!) {
    findMenuItemById(_id: $id) {
      name
      price
      category
    }
  }
`

const findMenuItemsByCategoryQuery = gql`
  query($category: String!) {
    findMenuItemsByCategory(category: $category) {
      name
      price
      category
      _id
    }
  }
`

const allOrdersQuery = gql`
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
      qty
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

const findOrderByIdQuery = gql`
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
      qty
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

const createOrderMutation = gql`
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

export {
  allMenuItemsQuery,
  findMenuItemByIdQuery,
  findMenuItemsByCategoryQuery,
  allOrdersQuery,
  findOrderByIdQuery,
  createOrderMutation,
}
