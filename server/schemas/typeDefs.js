const { gql } = require("apollo-server-express");
const {
  ApolloServerPluginLandingPageLocalDefault,
} = require("apollo-server-core");
const { GraphQLScalarType, Kind } = require("graphql");

const typeDefs = gql`
  scalar Date

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
    paymentResult: [PaymentRes]
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

  type PaymentRes {
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

  input OrderItemInput {
    productName: String!
    quantity: Int!
    image: String!
    price: Int!
  }

  input ShippingInput {
    address: String!
    city: String!
    postCode: Int!
    country: String!
  }

  input PaymentResInput {
    _id: ID
    status: String!
    update_time: String!
    email_address: String!
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
      OrderItems: OrderItemInput!
      ShippingAddress: ShippingInput!
      paymentMethod: String!
      totalPrice: Int!
      taxPrice: Int!
      shippingPrice: Int!
    ): Order
    UpdateOrderToPaid(
      isPaid: Boolean!
      paidAt: Date!
      paymentResult: PaymentResInput!
    ): Order
    UpdateOrderToDelivered(isDelivered: Boolean!, deliveredAt: Date!): Order
  }
`;

module.exports = typeDefs;
