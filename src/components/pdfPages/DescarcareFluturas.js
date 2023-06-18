import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PDFFile from "./PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { getUsers } from "../../service/api.js";
import { PDFViewer } from "@react-pdf/renderer";
import styles from "./pdf";
import "./pdf.css";
import NavBar from "../NavBar";
import { Button } from "@mui/material";

const CrearePdf = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);

  const handleUserChange = (event) => {
    const selectedIndex = event.target.value;
    setSelectedUser(Number(selectedIndex));
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

  return (
    <div className="App creare-pdf">
      <NavBar />
      <select value={selectedUser} onChange={handleUserChange}>
        <option value="">Selectează angajatul</option>
        {users.map((user, index) => (
          <option key={index} value={index}>
            {user.nume}
          </option>
        ))}
      </select>

      {selectedUser !== null && (
        <div className="button-container">
          <PDFDownloadLink
            document={<PDFFile user={users[selectedUser]} />}
            fileName={`${users[selectedUser]?.nume}_FORM.pdf`}
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
        {selectedUser !== null && (
          <PDFViewer style={styles.pdfViewerContainer}>
            <PDFFile user={users[selectedUser]} />
          </PDFViewer>
        )}
      </div>
    </div>
  );
};

export default CrearePdf;
