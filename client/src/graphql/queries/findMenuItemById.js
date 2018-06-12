import { gql } from 'apollo-boost'

export const findMenuItemByIdQuery = gql`
  query($id: ID!) {
    findMenuItemById(_id: $id) {
      name
      price
      category
    }
  }
`
