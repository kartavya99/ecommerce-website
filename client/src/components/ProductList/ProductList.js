import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { QUERY_ALL_PRODUCTS } from "../../utils/queries";
import RenderProductList from "./RenderProductList";

const ProductList = () => {
  const { data, loading } = useQuery(QUERY_ALL_PRODUCTS);

  // console.log(data);
  // console.log(data.getAllProducts._id);

  return (
    <>
      <div>{data && !loading && <RenderProductList data={data} />}</div>
    </>
  );
};

export default ProductList;
