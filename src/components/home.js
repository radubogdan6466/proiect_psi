import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Grid, Box } from "@mui/material";
import NavBar from "./NavBar";
import { getUsers } from "../service/api";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.log("Eroare la preluarea utilizatorilor:", error);
    }
  };

  return (
    <div>
      <NavBar />
      <Container maxWidth="md">
        <Box display="flex">
          <Box flex={1}>
            <section>
              <Typography variant="h5" component="h2" gutterBottom>
                Angajați
              </Typography>
              <div className="user-list">
                <Typography variant="h6" gutterBottom>
                  Total angajați: {users.length}
                </Typography>
              </div>
            </section>
            <section>
              <Typography variant="h5" component="h2" gutterBottom>
                Rapoarte
              </Typography>
              <Button
                component={Link}
                to="/rapoarte"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
              >
                Accesează rapoarte
              </Button>
            </section>
          </Box>
          <Box flex={1}>
            <section>
              <Typography variant="h5" component="h2" gutterBottom>
                Panou management informații angajați
              </Typography>
              <Button
                component={Link}
                to="/creare-pdf"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
              >
                Generează fluturaș pentru salariu angajați
              </Button>
            </section>
          </Box>
        </Box>
        <footer>
          <Typography variant="body1" align="center">
            Alte acțiuni
          </Typography>
        </footer>
      </Container>
    </div>
  );
};

export default Home;
