import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PDFFile from "./PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { getUsers } from "../../service/api.js";
import { PDFViewer } from "@react-pdf/renderer";
import styles from "./pdf";
import "./pdf.css";
import NavBar from "../NavBar";
import { Button, styled } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const CrearePdf = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [customUser, setCustomUser] = useState("");

  const handleUserChange = (event, value) => {
    if (value) {
      if (value.customOption) {
        setSelectedUser(null); // Reset selected user
        setCustomUser(value.nume);
      } else {
        setSelectedUser(value.index);
        setCustomUser("");
      }
    } else {
      setSelectedUser(null); // Reset selected user
      setCustomUser("");
    }
  };

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

  const options = [
    ...users.map((user, index) => ({ index, nume: user.nume })),
    { customOption: true, nume: customUser },
  ];
  const CustomAutocomplete = styled(Autocomplete)(({ theme }) => ({
    "& .MuiInputBase-root": {
      backgroundColor: "#f5f5f5",
      borderRadius: theme.shape.borderRadius,
      "&:hover": {
        backgroundColor: "#e0e0e0",
      },
      "&.Mui-focused": {
        backgroundColor: "#e0e0e0",
      },
    },
  }));
  return (
    <div className="App creare-pdf">
      <NavBar />
      <CustomAutocomplete
        options={options}
        getOptionLabel={(option) => option.nume}
        value={selectedUser !== null ? options[selectedUser] : customUser}
        onChange={handleUserChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Selectează angajatul"
            fullWidth
            margin="normal"
            sx={{
              "& .MuiInputLabel-root": {
                color: "#333",
              },
              "& .MuiInputBase-input": {
                padding: "10px 12px",
              },
            }}
          />
        )}
      />

      {selectedUser !== null && (
        <div className="button-container">
          <PDFDownloadLink
            document={<PDFFile user={users[selectedUser]} />}
            fileName={`${users[selectedUser]?.nume}_Salariu.pdf`}
          >
            {({ loading }) =>
              loading ? (
                <button className="download-button">Loading Document...</button>
              ) : (
                <Button className="download-button" variant="contained">
                  Descarca
                </Button>
              )
            }
          </PDFDownloadLink>
        </div>
      )}

      <div className="pdf-viewer-container">
        <PDFViewer style={styles.pdfViewerContainer}>
          {selectedUser !== null ? (
            <PDFFile user={users[selectedUser]} />
          ) : (
            <div className="empty-viewer">Niciun utilizator selectat.</div>
          )}
        </PDFViewer>
      </div>
    </div>
  );
};

export default CrearePdf;
