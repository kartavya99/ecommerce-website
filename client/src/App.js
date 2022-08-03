import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { StoreProvider } from "./utils/GlobalState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import Footer from "./components/Footer/Footer";
import Login from "./pages/loginPage/Login";
import Register from "./pages/registerPage/Register";
import HomePage from "./pages/homePage/HomePage";
import ProductPage from "./pages/productPage/ProductPage";
import CartPage from "./pages/cartPage/CartPage";
import ShippingPage from "./pages/shippingPage/ShippingPage";
import UserPageList from "./pages/userPageList/UserPageList";
import UserEditPage from "./pages/userEditPage/UserEditPage";
import ProductListPage from "./pages/productListPage/ProductListPage";
import ProductEditPage from "./pages/productEditPage/ProductEditPage";

//Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

//Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage it it exists
  const token = localStorage.getItem("id_token");
  //return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authlink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <div>
            {/* <StoreProvider> */}
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/products" element={<ProductList />}></Route>
              <Route
                path="products/:productId"
                element={<ProductPage />}
              ></Route>
              <Route path="cart/:id" element={<CartPage />}></Route>
              <Route path="/shipping" element={<ShippingPage />}></Route>
              <Route path="/admin/userlist" element={<UserPageList />}></Route>
              <Route
                path="/admin/user/:id/edit"
                element={<UserEditPage />}
              ></Route>
              <Route
                path="/admin/productlist"
                element={<ProductListPage />}
              ></Route>
              <Route
                path="admin/product/:id/edit"
                element={<ProductEditPage />}
              ></Route>
            </Routes>

            <Footer />
            {/* </StoreProvider> */}
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
