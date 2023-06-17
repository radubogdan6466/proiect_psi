import React from "react";
import { getUsers } from "../../service/api.js";
import { useEffect, useState } from "react";
import {
  TableRow,
  Table,
  TableBody,
  TableCell,
  TableHead,
  styled,
} from "@mui/material";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #000000;
    color: #ffffff;
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TRow key={user.userId}>
            <TableCell>{user.userId}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
          </TRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};
export default AllUsers;
