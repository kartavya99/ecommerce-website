import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import classes from "./UserPageList.module.css";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import { QUERY_USERS } from "../../utils/queries";
import { UPDATE_USER } from "../../utils/actions";
import Loader from "../../components/Loader/Loader";

const UserPageList = () => {
  const [state, dispatch] = useStoreContext();
  const { user } = state;
  console.log(user);

  const { loading, data } = useQuery(QUERY_USERS);
  console.log(data);

  // useEffect(() => {
  //   if (loading) {
  //     <Loader />;
  //   } else if (data) {
  //     console.log(data);
  //     dispatch({
  //       type: UPDATE_USER,
  //       users: data,
  //     });
  //     console.log(data);
  //   }
  // }, [data, loading, dispatch]);

  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <p> USERS LIST</p>
      </div>
      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>ADMIN</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>62e8edb4c9da1ba0910d471e</td>
            <td>John</td>
            <td>Doe</td>
            <td>
              <a href={`**`}>john@example.com</a>
            </td>
            <td>✅ or ❌</td>
            <td>
              <LinkContainer to={`/admin/user/2}/edit`}>
                <Button variant="light" className="btn-sm">
                  <i className="fas fa-edit">EDIT</i>
                </Button>
              </LinkContainer>
              <Button variant="danger" className="btn-sm">
                <i className="fas fa-trash"> DELETE</i>
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default UserPageList;
