import { gql } from "apollo-server"

export default gql`
  extend type Mutation {
    deleteUser: Status
  }
`
