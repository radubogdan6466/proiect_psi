import React, { useState } from "react";
import CrearePdf from "./pdfPages/CrearePdf";
import style from "../index.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <header>
          <h1>Numele site-ului</h1>
          <nav>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </nav>
        </header>

        <section>
          <h2>Bun venit pe site-ul nostru!</h2>
          <p>Aici veți găsi cele mai bune produse și servicii.</p>
          <Link to="/creare-pdf">Creați PDF</Link>
        </section>

        <section>
          <h2>Produse și servicii</h2>
          <ul>
            <li>Produs 1</li>
            <li>Produs 2</li>
            <li>Produs 3</li>
          </ul>
        </section>

        <section>
          <h2>Recenzii clienți</h2>
          <ul>
            <li>Recenzie 1</li>
            <li>Recenzie 2</li>
            <li>Recenzie 3</li>
          </ul>
        </section>

        <footer>
          <p>Informații de contact</p>
          <ul>
            <li>Adresa</li>
            <li>Telefon</li>
            <li>Email</li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Home;
