import React from "react";
import NavBar from "./NavBar";
import { Grid, Paper } from "@mui/material";

const Documente = () => {
  return (
    <div>
      <NavBar />
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ height: "100%", padding: "20px" }}>
            <h3>Raport salariu</h3>
            <p>Some content for salary report</p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ height: "100%", padding: "20px" }}>
            <h3>Raport producție</h3>
            <p>Some content for production report</p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ height: "100%", padding: "20px" }}>
            <h3>Contract munca</h3>
            <p>Genereaza un contract individual de munca</p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ height: "100%", padding: "20px" }}>
            <h3>Un alt raport</h3>
            <p>Some content for another report</p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ height: "100%", padding: "20px" }}>
            <h3>Raport special</h3>
            <p>Some content for special report</p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ height: "100%", padding: "20px" }}>
            <h3>Ultimul raport</h3>
            <p>Some content for the last report</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Documente;
