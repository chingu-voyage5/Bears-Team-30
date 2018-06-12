import { gql } from 'apollo-boost'

export const findMenuItemsByCategory = gql`
  query($category: String!) {
    findMenuItemsByCategory(category: $category) {
      name
      price
      category
      _id
    }
  }
`
