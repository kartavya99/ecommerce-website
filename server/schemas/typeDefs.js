const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    isAdmin: Boolean!
    orders: [Order]
  }

  type Product {
    _id: ID
    productName: String!
    image: String!
    brand: String!
    description: String!
    price: Int!
    countInStock: Int!
  }

  type Order {
    orderItems: [OrderItem]
  }

  type OrderItem {
    productName: String!
    quantity: Int!
    image: String!
    price: Int!
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    singleUser: User
    product(_id: ID!): Product
    order(_id: ID!): Order
    users: [User]
    products: [Product]
  }

  type Mutation {
    createUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      isAdmin: Boolean!
    ): Auth
    login(email: String!, password: String!): Auth
    createProduct(
      user: ID!
      productName: String!
      image: String!
      brand: String!
      description: String!
      price: Int!
      countInStock: Int!
    ): Product
    createOrder(products: [ID]!): Order
    updateUserProfile(firstName: String, lastName: String, email: String): User
    updateProduct(
      _id: ID!
      productName: String
      image: String
      brand: String
      description: String
      price: Int
      countInStock: Int
    ): Product
    updateUser(
      _id:ID
      firstName: String
      lastName: String
      email: String
      isAdmin: Boolean
    )
    deleteUser(
      _id:ID!
    )
    deleteProduct(
      _id: ID
    )
  }
`;

module.exports = typeDefs;
