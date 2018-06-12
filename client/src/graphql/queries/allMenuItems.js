import { gql } from 'apollo-boost'

export const allMenuItems = gql`
  {
    allMenuItems {
      _id
      name
      price
      category
    }
  }
`
