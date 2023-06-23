import React, { useState, useEffect } from "react";
import { getUsers } from "../../service/api.js";
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
  TextField,
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
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.prenume.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      <TextField
        label="Caută utilizatori"
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: 10 }}
      />
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
          {filteredUsers.map((user) => (
            <TRow key={user.userId}>
              <TableCell>{user.userId}</TableCell>
              <TableCell>{user.name}</TableCell>
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
                  Deschide
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
