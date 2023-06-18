import React from "react";
import { getUsers, deleteUser } from "../../service/api.js";
import { useEffect, useState } from "react";
import NavBar from "../NavBar.js";
import { Link } from "react-router-dom";
import {
  TableRow,
  Table,
  TableBody,
  TableCell,
  TableHead,
  styled,
  Button,
} from "@mui/material";

const StyledTable = styled(Table)`
  width: 100%;
`;

const THead = styled(TableRow)`
  & > th {
    font-size: 15px;
    background: #000000;
    color: #ffffff;
    text-align: center;
    margin: 0;
    padding: 0;
  }
`;

const TRow = styled(TableRow)`
  & > td {
    font-size: 12px;
    justify-content: center;
    text-align: center;
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
  const deleteUserDetails = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };
  return (
    <div>
      <NavBar />
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
            <TableCell></TableCell>
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
              <TableCell>
                <Button
                  color="primary"
                  variant="contained"
                  style={{
                    marginBottom: 10,
                    marginRight: 10,
                    width: 80,
                    height: 30,
                  }}
                  component={Link}
                  to={`/edit/${user._id}`}
                >
                  Modifica
                </Button>
                <Button
                  color="secondary"
                  variant="contained"
                  style={{ marginBottom: 10, width: 80, height: 30 }}
                  onClick={() => deleteUserDetails(user._id)}
                >
                  Sterge
                </Button>
              </TableCell>
            </TRow>
          ))}
        </TableBody>
      </StyledTable>
    </div>
  );
};
export default AllUsers;
