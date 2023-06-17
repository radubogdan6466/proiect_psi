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
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Nume</TableCell>
          <TableCell>Prenume</TableCell>
          <TableCell>Sal brut</TableCell>
          <TableCell>CNP</TableCell>
          <TableCell>Functia</TableCell>
          <TableCell>Telefon</TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TRow key={user.userId}>
            <TableCell>{user.userId}</TableCell>
            <TableCell>{user.nume}</TableCell>
            <TableCell>{user.prenume}</TableCell>
            <TableCell>{user.salBrut}</TableCell>
            <TableCell>{user.cnp}</TableCell>
            <TableCell>{user.functia}</TableCell>
            <TableCell>{user.telefon}</TableCell>
          </TRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};
export default AllUsers;
