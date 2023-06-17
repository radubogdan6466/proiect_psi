import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PDFFile from "./PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";
import jsonData from "../angajati.json";
import { PDFViewer } from "@react-pdf/renderer";
import styles from "./pdf";
import "./pdf.css";
import { getUsers } from "../../service/api.js";

export const AllUsers = () => {};

const CrearePdf = () => {
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
            document={<PDFFile employee={jsonData[selectedEmployee]} />}
            fileName={`${jsonData[selectedEmployee]?.nume}_FORM.pdf`}
          >
            {({ loading }) =>
              loading ? (
                <button className="download-button">Loading Document...</button>
              ) : (
                <button className="download-button">Download</button>
              )
            }
          </PDFDownloadLink>
        </div>
      )}

      <div className="pdf-viewer-container">
        {selectedEmployee !== null && (
          <PDFViewer style={styles.pdfViewerContainer}>
            <PDFFile employee={jsonData[selectedEmployee]} />
          </PDFViewer>
        )}
      </div>

      <div className="home-button-container">
        <Link to="/">Go to Home</Link>
      </div>
      {users.map((user) => (
        <ul key={user.userId}>
          <li>{user.userId}</li>
          <li>{user.nume}</li>
          <li>{user.salBrut}</li>
          <li>{user.cnp}</li>
          <li>{user.functia}</li>
          <li>{user.telefon}</li>
        </ul>
      ))}
    </div>
  );
};

export default CrearePdf;
