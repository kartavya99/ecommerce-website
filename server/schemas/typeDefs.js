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
    shippingAddress: [ShippingAdd]
    paymentMethod: String!
    paymentResult: [paymentRes]
    totalPrice: Int!
    taxPrice: Int!
    shippingPrice: Int!
    isPaid: Boolean!
    paidAt: Date!
    isDelivered: Boolean!
  }

  type OrderItem {
    productName: String!
    quantity: Int!
    image: String!
    price: Int!
  }

  type ShippingAdd {
    address: String!
    city: String!
    postCode: Int!
    country: String!
  }

  type paymentRes {
    _id: ID
    status: String!
    update_time: String!
    email_address: String!
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    singleUser: User
    product(_id: ID!): Product
    getAllProducts: [Product]
    order(_id: ID!): Order
    users: [User]
    getOrder(_id: ID!): Order
    getAllOrder: [Order]
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
      _id: ID
      firstName: String
      lastName: String
      email: String
      isAdmin: Boolean
    ): User
    deleteUser(_id: ID!): User
    deleteProduct(_id: ID): Product
    createOrder(
      orderItems: [orderItem]!
      shippingAddress: [shippingAdd]!
      paymentMethod: String!
      totalPrice: Int!
      taxPrice: Int!
      shippingPrice: Int!
    ): Order
    UpdateOrderToPaid(
      isPaid: Boolean!
      paidAt: Date!
      paymentResult: [paymentRes]!
    ): Order
    UpdateOrderToDelivered(isDelivered: Boolean!, deliveredAt: Date!): Order
  }
`;

module.exports = typeDefs;
