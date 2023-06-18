import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Home = () => {
  // State pentru datele angajaților
  const [employees, setEmployees] = useState([]);

  // Funcție pentru adăugarea unui angajat
  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <div className="container">
      <NavBar />
      <div>
        <header>
          <h1>Admin panel</h1>
        </header>
        <section>
          <h2>Panou management informații angajați</h2>
          <Link to="/creare-pdf">
            Generează fluturaș pentru salariu angajați
          </Link>
        </section>
        <section>
          <h2>Angajați</h2>
          <div className="employee-list">
            {employees.length > 0 ? (
              <ul>
                {employees.map((employee, index) => (
                  <li key={index}>
                    <span>{employee.name}</span>
                    <span>{employee.position}</span>
                    <span>{employee.salary}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Nu există angajați înregistrati.</p>
            )}
          </div>
          <Link to="/adauga-angajat">Adaugă angajat</Link>
        </section>
        <section>
          <h2>Rapoarte</h2>
          <Link to="/rapoarte">Accesează rapoarte</Link>
        </section>
        <footer>
          <p>Alte acțiuni</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
