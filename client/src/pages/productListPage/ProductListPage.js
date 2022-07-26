import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { Table, Button, Row, Col } from "react-bootstrap";
import classes from "./ProductListPage.module.css";
import { useQuery, useSubscription } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import { QUERY_ALL_PRODUCTS } from "../../utils/queries";
import Loader from "../../components/Loader/Loader";
import { BsTrash } from "react-icons/bs";
import { BsFileEarmarkDiffFill } from "react-icons/bs";
import { useMutation } from "@apollo/client";
import { DELETE_PRODUCT } from "../../utils/mutation";
import { PRODUCT_DELETE_REQUEST } from "../../utils/actions";
import Auth from "../../utils/auth";
import NoAuthPage from "../../components/NoAuthPage/NoAuthPage";

function ProductListPage() {
  const [state, dispatch] = useStoreContext();
  const [deleteProduct, { error }] = useMutation(DELETE_PRODUCT);

  const { data, loading } = useQuery(QUERY_ALL_PRODUCTS);
  // const products = data?.products || [];
  // console.log(products);

  useEffect(() => {
    if (loading) {
      <Loader />;
    } else {
      const product = data;
      console.log(product);

      dispatch({
        type: PRODUCT_DELETE_REQUEST,
        products: data.getAllProducts,
      });
    }
  }, [data, loading, dispatch]);
  // console.log(data);
  // console.log(data.getAllProducts);

  const deleteProductHandler = async (id) => {
    try {
      const { data } = await deleteProduct({
        variables: { id },
      });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {Auth.admin() ? (
        <div>
          {data && !loading && (
            <div className={classes.container}>
              <Row>
                <Col className={classes.heading}>
                  <p>PRODUCTS</p>
                </Col>
                <Col className="text-right">
                  <LinkContainer to={`/admin/product/create`}>
                    <Button className={classes["btn-primary"]}>
                      ➕ CREATE PRODUCT
                    </Button>
                  </LinkContainer>
                </Col>
              </Row>
              {data.getAllProducts.map((product) => {
                // console.log(product);
                return (
                  <>
                    <Table
                      striped
                      bordered
                      hover
                      responsive
                      className="table-sm"
                    >
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>NAME</th>
                          <th>PRICE</th>
                          <th>BRAND</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr key={product._id}>
                          <td>{product._id}</td>
                          <td>{product.productName}</td>
                          <td>${product.price}</td>
                          <td>{product.brand}</td>
                          <td>
                            <LinkContainer to={`/admin/product/1/edit`}>
                              <Button variant="light" className="btn-sm">
                                <BsFileEarmarkDiffFill />
                              </Button>
                            </LinkContainer>
                            <Button
                              onClick={() => deleteProductHandler(product._id)}
                              variant="light"
                              className="btn-sm"
                            >
                              <BsTrash />
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <NoAuthPage />
      )}
    </>
  );
}

export default ProductListPage;
