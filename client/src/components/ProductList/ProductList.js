import React, { useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../../utils/queries";
// import { Link } from "react-router-dom";
import classes from "./Product.module.css";
import dummy_products from "./ProductData";
import Card from "react-bootstrap/Card";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const ProductList = () => {
  const [state, dispatch] = useStoreContext();

  const { currentProducts } = state;
  console.log(currentProducts);

  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
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
  }, [data, loading, dispatch]);

  //   console.log(dummy_project);
  return (
    <p>Our PRODUCTS</p>
    // <div className={classes["main-container"]}>
    //   <h4 className={classes["product-heading"]}>LATEST PRODUCTS</h4>
    //   <div className={classes["container-fluid"]}>
    //     {dummy_products.map((product) => (
    //       <Card className="my-3 p-3 rounded" key={product._id}>
    //         <Card.Img src={product.image} variant="top" />

    //         <Card.Body>
    //           <Card.Title>
    //             <strong>{product.productName}</strong>
    //           </Card.Title>

    //           <Card.Text>${product.price}</Card.Text>
    //         </Card.Body>
    //       </Card>
    //     ))}
    //   </div>
    // </div>

    // <Card className="my-3 p-3 rounded">
    //   {/* <Link to={`/product/${product._id}`}> */}
    //   <Card.Img src={product.image} variant="top" />
    //   {/* </Link> */}

    //   <Card.Body>
    //     {/* <Link to={`/product/${product._id}`}> */}
    //     <Card.Title as="div">
    //       <strong>{product.name}</strong>
    //     </Card.Title>
    //     {/* </Link> */}

    //     <Card.Text as="h3">${product.price}</Card.Text>
    //   </Card.Body>
    // </Card>
  );
};

export default ProductList;
