import { AppBar, Toolbar, styled, Menu, MenuItem, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { styled as muiStyled } from "@mui/system";
import Documente from "./Documente.js";

const Header = muiStyled(AppBar)`
background: #111111;
width: 100%;

`;

const Tabs = muiStyled(NavLink)`
  color: #ffffff;
  padding: 0 10px;
  text-decoration: none;
  font-size: 16px;
`;

const StyledMenu = muiStyled(Menu)`
  .MuiMenu-paper {
    background-color: #111111;
    color: #ffffff;
  }
`;

const StyledMenuItem = muiStyled(MenuItem)`

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const StyledButton = muiStyled(Button)`
  color: #ffffff;
`;

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Header position="sticky">
      <Toolbar>
        <Tabs to="/">Proiect psi</Tabs>
        <Tabs to="/AllUsers">Vizualizare angajați</Tabs>
        <Tabs to="/AddUser">Adaugare angajați</Tabs>
        <Tabs color="inherit" onClick={handleMenuOpen}>
          Meniu
        </Tabs>
        <StyledMenu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <StyledMenuItem
            component={NavLink}
            to="/AddUser"
            onClick={handleMenuClose}
          >
            Introduceți date angajat
          </StyledMenuItem>
          <StyledMenuItem
            component={NavLink}
            to="/Descarcare-Fluturas"
            onClick={handleMenuClose}
          >
            Generați fluturaș salariu
          </StyledMenuItem>
          <StyledMenuItem
            component={NavLink}
            to="/Documente"
            onClick={handleMenuClose}
          >
            Documente
          </StyledMenuItem>
          <StyledMenuItem
            component={NavLink}
            to="/Descarcare-Contract-Angajare"
            onClick={handleMenuClose}
          >
            Accesare contracte
          </StyledMenuItem>

          <StyledMenuItem onClick={handleMenuClose}>
            <a href="https://cloud.mongodb.com/v2/648c775ea618256da2f8b07f#/clusters/detail/psiProiect">
              Acceseaza mongoDB
            </a>
          </StyledMenuItem>
          <StyledMenuItem onClick={handleMenuClose}>
            <a href="https://baconipsum.com/?paras=5&type=all-meat&start-with-lorem=1">
              Servicii tehnice
            </a>
          </StyledMenuItem>
        </StyledMenu>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
