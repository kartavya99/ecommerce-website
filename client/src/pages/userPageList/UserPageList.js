import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import classes from "./UserPageList.module.css";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import { QUERY_USERS } from "../../utils/queries";
import { UPDATE_USER, USER_DELETE_REQUEST } from "../../utils/actions";
import Loader from "../../components/Loader/Loader";
import { DELETE_USER } from "../../utils/mutation";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import NoAuthPage from "../../components/NoAuthPage/NoAuthPage";

// define a user so that user doesn't get added multiple times

const UserPageList = () => {
  const [state, dispatch] = useStoreContext();
  const { user } = state;
  // console.log(user);

  const { loading, data } = useQuery(QUERY_USERS);
  const [deleteUser, { error }] = useMutation(DELETE_USER);
  // console.log(data);

  useEffect(() => {
    if (loading) {
      <Loader />;
    } else if (data) {
      // console.log(data);
      // dispatch({
      //   type: USER_DELETE_REQUEST,
      //   users: data.users,
      // });
      // dispatch({
      //   type: UPDATE_USER,
      //   users: data.users,
      // });
    }
  }, [data, loading, dispatch]);

  const deleteUserHandler = async (id) => {
    dispatch({
      type: USER_DELETE_REQUEST,
      users: data.users,
    });

    dispatch({
      type: UPDATE_USER,
      users: data.users,
    });

    try {
      await deleteUser({
        variables: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {Auth.admin() === "true" ? (
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
                            <Button
                              onClick={() => deleteUserHandler(user._id)}
                              variant="danger"
                              className="btn-sm"
                            >
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
      ) : (
        <NoAuthPage />
      )}
    </>
  );
};

export default UserPageList;
