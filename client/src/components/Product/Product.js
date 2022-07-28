import React from "react";
import dummy_project from "./ProductData";

const Products = (props) => {
  //   console.log(dummy_project);
  return (
    <div>
      <h1>Products</h1>
      <section className="container-fluid">
        {dummy_project.map((project) => (
          <div key={project._id}>
            <h1>Product: {project.productName}</h1>
            <img
              src={project.image}
              alt={`product`}
              className="card-body "
            ></img>
            <h4>Product detail : {project.description}</h4>
            <h3>$: {project.price}</h3>
            <h3>Stock : {project.countInStock}</h3>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Products;
