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
    user: User
    product(_id: ID!): Product
    order(_id: ID!): Order
    allUsers(isAdmin: Boolean): User
  }

  type Mutation {
    createUser(
      firstName: String!
      lastName: String!
      email: String!
      isAdmin: Boolean!
      password: String!
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
    updateUser(firstName: String, lastName: String, email: String): User
    updateProduct(
      _id: ID!
      productName: String
      image: String
      brand: String
      description: String
      price: Int
      countInStock: Int
    ): Product
  }
`;

module.exports = typeDefs;
