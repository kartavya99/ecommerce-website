import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import classes from "./UserPageList.module.css";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import { QUERY_USERS } from "../../utils/queries";
import { UPDATE_USER } from "../../utils/actions";
import Loader from "../../components/Loader/Loader";

// define a user so that user doesn't get added multiple times

const UserPageList = () => {
  const [state, dispatch] = useStoreContext();
  const { user } = state;
  // console.log(user);

  const { loading, data } = useQuery(QUERY_USERS);
  // console.log(data);

  useEffect(() => {
    if (loading) {
      <Loader />;
    } else if (data) {
      // console.log(data.users);

      dispatch({
        type: UPDATE_USER,
        users: data,
      });
      console.log(data);
    }
  }, [data, loading, dispatch]);

  return (
    <div>
      {" "}
      {data && !loading && (
        <div className={classes.container}>
          <div className={classes.heading}>
            <p> USERS LIST</p>
          </div>

          {data.users.map((user) => {
            return (
              <>
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
                    <tr key={user._id}>
                      <td>{user._id}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td>{user.isAdmin ? `✅` : `❌`} </td>
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
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default UserPageList;
