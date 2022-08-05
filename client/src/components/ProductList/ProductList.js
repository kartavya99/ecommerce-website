import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import { QUERY_ALL_PRODUCTS } from "../../utils/queries";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import RenderProductList from "./RenderProductList";
import { idbPromise } from "../../utils/helpers";

const ProductList = () => {
  const [state, dispatch] = useStoreContext();
  const { products } = state;
  const { data, loading } = useQuery(QUERY_ALL_PRODUCTS);

  useEffect(() => {
    if (data) {
      console.log(data);
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.getAllProducts,
      });
      data.products.forEach((product) => {
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
  }, [data, loading, dispatch, products]);

  // console.log(data);
  // console.log(data.getAllProducts._id);

  return (
    <>
      <div>{data && !loading && <RenderProductList data={products} />}</div>
    </>
  );
};

export default ProductList;
