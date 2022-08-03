import React from "react";
import { Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const UserPageList = () => {
  return (
    <div>
      <div>
        <h1> USERS LIST</h1>
      </div>
      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADMIN</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>62e8edb4c9da1ba0910d471e</td>
            <td>John Doe</td>
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
