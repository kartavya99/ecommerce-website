import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexWrap: "wrap",
  },
};

const RenderProductList = ({ data }) => {
  // console.log(data);
  console.log(data.getAllProducts);
  return (
    <>
      <div style={styles.container}>
        {data.getAllProducts.map((product) => {
          return (
            <Card className="m-3 p-3 rounded" style={{ width: "18rem" }}>
              <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant="top" />
              </Link>

              <Card.Body>
                <Link to={`/product/${product._id}`}>
                  <Card.Title as="div">
                    <strong>{product.productName}</strong>
                  </Card.Title>
                </Link>

                <Card.Text as="h3">${product.price}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default RenderProductList;
