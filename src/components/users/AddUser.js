import { useState } from "react";
import React from "react";
import AllUsers from "./AllUsers";
import { Navigate, useNavigate } from "react-router-dom";
import NavBar from "../NavBar.js";

import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";

import { addUser } from "../../service/api";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  name: "",
  prenume: "",
  salBrut: "",
  cnp: "",
  functia: "",
  telefon: "",
  dataNastere: null,
  adresa: "",
  email: "",
  cetatetnie: "",
  stareCivila: "",
  dataAngajare: null,
  username: "",
  password: "",
};

const AddUser = () => {
  const [user, setUser] = useState(defaultValue);
  const [cnpError, setCnpError] = useState("");
  const [salBrutError, setSalBrutError] = useState("");
  const [telefonError, setTelefonError] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const navigate = useNavigate();

  const onValueChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    if (name === "cnp") {
      if (!/^\d+$/.test(value)) {
        setCnpError("CNP-ul trebuie să conțină doar cifre.");
      } else if (value.length !== 13) {
        setCnpError("CNP-ul trebuie să aibă 13 caractere.");
      } else {
        setCnpError("");
      }
    }

    if (name === "salBrut") {
      if (!/^\d+$/.test(value)) {
        setSalBrutError("Salariul brut trebuie să conțină doar cifre.");
      } else {
        setSalBrutError("");
      }
    }

    if (name === "telefon") {
      if (!/^\d+$/.test(value)) {
        setTelefonError("Numărul de telefon trebuie să conțină doar cifre.");
      } else {
        setTelefonError("");
      }
    }

    const isDisabled =
      value === "" ||
      user.name === "" ||
      user.prenume === "" ||
      user.salBrut === "" ||
      user.cnp === "" ||
      user.functia === "" ||
      user.telefon === "" ||
      user.dataNastere === "" ||
      user.adresa === "" ||
      user.email === "" ||
      user.cetatetnie === "" ||
      user.stareCivila === "" ||
      user.dataAngajare === "" ||
      cnpError !== "" ||
      salBrutError !== "" ||
      telefonError !== "";

    setIsButtonDisabled(isDisabled);
  };

  const addUserDetails = async () => {
    await addUser(user);
    navigate("/AllUsers");
  };
  const validateDateFormat = (value) => {
    const pattern = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/;
    return pattern.test(value);
  };

  return (
    <div>
      <NavBar />
      <Container>
        <Typography variant="h4">Introdu date angajat</Typography>
        <FormControl>
          <InputLabel>Nume</InputLabel>
          <Input onChange={onValueChange} name="name" required />
        </FormControl>
        <FormControl>
          <InputLabel>Prenume</InputLabel>
          <Input onChange={onValueChange} name="prenume" required />
        </FormControl>
        <FormControl>
          <InputLabel>Sal Brut</InputLabel>
          <Input onChange={onValueChange} name="salBrut" required />
          {salBrutError && <span style={{ color: "red" }}>{salBrutError}</span>}
        </FormControl>
        <FormControl>
          <InputLabel>Cnp</InputLabel>
          <Input onChange={onValueChange} name="cnp" required />
          {cnpError && <span style={{ color: "red" }}>{cnpError}</span>}
        </FormControl>
        <FormControl>
          <InputLabel>Functia</InputLabel>
          <Input onChange={onValueChange} name="functia" required />
        </FormControl>
        <FormControl>
          <InputLabel>Telefon</InputLabel>
          <Input onChange={onValueChange} name="telefon" required />
          {telefonError && <span style={{ color: "red" }}>{telefonError}</span>}
        </FormControl>
        <FormControl>
          <InputLabel>Data Nasterii (zi/luna/an)</InputLabel>
          <Input onChange={onValueChange} name="dataNastere" required />
          {!validateDateFormat(user.dataNastere) && (
            <span style={{ color: "red" }}>
              Formatul trebuie să fie zi/luna/an
            </span>
          )}
        </FormControl>
        <FormControl>
          <InputLabel>Adresa</InputLabel>
          <Input onChange={onValueChange} name="adresa" required />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={onValueChange} name="email" required />
        </FormControl>
        <FormControl>
          <InputLabel>Cetatetnie</InputLabel>
          <Input onChange={onValueChange} name="cetatetnie" required />
        </FormControl>
        <FormControl>
          <InputLabel>Stare Civila</InputLabel>
          <Input onChange={onValueChange} name="stareCivila" required />
        </FormControl>
        <FormControl>
          <InputLabel>Data Angajarii (zi/luna/an)</InputLabel>
          <Input onChange={onValueChange} name="dataAngajare" required />
          {!validateDateFormat(user.dataAngajare) && (
            <span style={{ color: "red" }}>
              Formatul trebuie să fie zi/luna/an
            </span>
          )}
        </FormControl>
        <FormControl>
          <InputLabel>Utilizator</InputLabel>
          <Input onChange={onValueChange} name="username" required />
        </FormControl>
        <FormControl>
          <InputLabel>Parola</InputLabel>
          <Input onChange={onValueChange} name="password" required />
        </FormControl>
        <FormControl>
          <Button
            variant="contained"
            onClick={addUserDetails}
            disabled={isButtonDisabled}
          >
            Adauga
          </Button>
        </FormControl>
      </Container>
    </div>
  );
};

export default AddUser;
