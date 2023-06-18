import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import jsonData from "../angajati.json";
import { PDFViewer } from "@react-pdf/renderer";
import styles from "./pdf";
import "./pdf.css";
import { getUsers } from "../../service/api.js";
import NavBar from "../NavBar";
import { Button } from "@mui/material";
import ContractAngajare from "./ContractAngajat.js";

export const AllUsers = () => {};

const DescarcareContractAngajare = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEmployeeChange = (event) => {
    const selectedIndex = event.target.value;
    setSelectedEmployee(Number(selectedIndex));
  };
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
    <div className="App creare-pdf">
      <NavBar />
      <select value={selectedEmployee} onChange={handleEmployeeChange}>
        <option value="">Selectează angajatul</option>
        {jsonData.map((employee, index) => (
          <option key={index} value={index}>
            {employee.nume}
          </option>
        ))}
      </select>

      {selectedEmployee !== null && (
        <div className="button-container">
          <PDFDownloadLink
            document={
              <ContractAngajare employee={jsonData[selectedEmployee]} />
            }
            fileName={`${jsonData[selectedEmployee]?.nume}_FORM.pdf`}
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
        {selectedEmployee !== null && (
          <PDFViewer style={styles.pdfViewerContainer}>
            <ContractAngajare employee={jsonData[selectedEmployee]} />
          </PDFViewer>
        )}
      </div>
    </div>
  );
};

export default DescarcareContractAngajare;
