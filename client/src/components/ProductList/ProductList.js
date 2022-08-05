import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import { QUERY_ALL_PRODUCTS } from "../../utils/queries";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import RenderProductList from "./RenderProductList";
import { idbPromise } from "../../utils/helpers";
import Loader from "../Loader/Loader";

const ProductList = () => {
  const [state, dispatch] = useStoreContext();

  const { data, loading } = useQuery(QUERY_ALL_PRODUCTS);
  // console.log(data);

  useEffect(() => {
    if (loading) {
      <Loader />;
    } else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data,
      });
      data.getAllProducts.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  return (
    <>
      <div>{data && !loading && <RenderProductList data={data} />}</div>
    </>
  );
};

export default ProductList;
