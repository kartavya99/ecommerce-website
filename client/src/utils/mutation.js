import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $isAdmin: Boolean!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      isAdmin: $isAdmin
    ) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation CreateProduct(
    $user: ID!
    $productName: String!
    $image: String!
    $brand: String!
    $description: String!
    $price: Int!
    $countInStock: Int!
  ) {
    createProduct(
      user: $user
      productName: $productName
      image: $image
      brand: $brand
      description: $description
      price: $price
      countInStock: $countInStock
    ) {
      _id
      productName
      image
      brand
      description
      price
      countInStock
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct(
    $id: ID!
    $productName: String
    $image: String
    $brand: String
    $description: String
    $price: Int
    $countInStock: Int
  ) {
    updateProduct(
      _id: $id
      productName: $productName
      image: $image
      brand: $brand
      description: $description
      price: $price
      countInStock: $countInStock
    ) {
      _id
      productName
      image
      brand
      description
      price
      countInStock
    }
  }
`;

export const UPDATE_USER = gql`
  mutation Mutation(
    $id: ID
    $firstName: String
    $lastName: String
    $email: String
    $isAdmin: Boolean
  ) {
    updateUser(
      _id: $id
      firstName: $firstName
      lastName: $lastName
      email: $email
      isAdmin: $isAdmin
    ) {
      _id
      firstName
      lastName
      email
      isAdmin
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(_id: $id) {
      _id
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct {
    deleteProduct {
      _id
    }
  }
`;

export const CREATE_ORDER = gql`
  mutation CreateOrder(
    $orderItems: [OrderItemInput]!
    $shippingAddress: ShippingInput!
    $paymentMethod: String!
    $totalPrice: Int!
    $taxPrice: Int!
    $shippingPrice: Int!
  ) {
    createOrder(
      orderItems: $orderItems
      shippingAddress: $shippingAddress
      paymentMethod: $paymentMethod
      totalPrice: $totalPrice
      taxPrice: $taxPrice
      shippingPrice: $shippingPrice
    ) {
      _id
      orderItems {
        productName
        quantity
        image
        price
      }
      shippingAddress {
        address
        city
        postCode
        country
      }
      paymentMethod
      paymentResult {
        _id
        status
        update_time
        email_address
      }
      totalPrice
      taxPrice
      shippingPrice
      isPaid
      paidAt
      isDelivered
    }
  }
`;
