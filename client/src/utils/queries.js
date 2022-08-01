import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    _id
    firstName
    lastName
    email
    isAdmin
    isCreatedAt
    orders {
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

export const QUERY_SINGLE_USER = gql`
  query singleUser {
    _id
    firstName
    lastName
    email
    isAdmin
    orders {
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

export const QUERY_ALL_PRODUCTS = gql`
  query Query {
    getAllProducts {
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

export const QUERY_PRODUCT = gql`
  query getProduct($id: ID!) {
    product(_id: $id) {
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

export const QUERY_ORDER = gql`
  query getOrder($id: _id) {
    order(_id: $id) {
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

export const QUERY_USERS = gql`
  query users {
    _id
    firstName
    lastName
    email
    isAdmin
    isCreatedAt
    orders {
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

export const QUERY_GET_ALL_ORDERS = gql`
  query getAllOrder {
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
`;
