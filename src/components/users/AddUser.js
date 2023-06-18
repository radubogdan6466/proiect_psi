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
  nume: "",
  prenume: "",
  salBrut: "",
  cnp: "",
  functia: "",
  telefon: "",
};
/*
userId: { type: String, unique: true },
  nume: String,
  cnp: String,
  oreLucrate: Number,
  cas: Number,
  impozit: Number,
  oreSuplimentare: Number,
  zileConcediu: Number,
  functia: String,
  oreRegimNormal: Number,
  oreCo: Number,
  oreBO: Number,
  persIntretinute: Number,
  vImpozabil: Number, 
  */

const AddUser = () => {
  const [user, setUser] = useState(defaultValue);
  const navigate = useNavigate();
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const addUserDetails = async () => {
    await addUser(user);
    navigate("/AllUsers");
  };
  return (
    <div>
      <NavBar />
      <Container>
        <Typography variant="h3">Introdu date angajat</Typography>
        <FormControl>
          <InputLabel>Nume</InputLabel>
          <Input onChange={onValueChange} name="nume" />
        </FormControl>
        <FormControl>
          <InputLabel>Prenume</InputLabel>
          <Input onChange={onValueChange} name="prenume" />
        </FormControl>
        <FormControl>
          <InputLabel>Sal Brut</InputLabel>
          <Input onChange={onValueChange} name="salBrut" />
        </FormControl>
        <FormControl>
          <InputLabel>Cnp</InputLabel>
          <Input onChange={onValueChange} name="cnp" />
        </FormControl>
        <FormControl>
          <InputLabel>Functia</InputLabel>
          <Input onChange={onValueChange} name="functia" />
        </FormControl>
        <FormControl>
          <InputLabel>Telefon</InputLabel>
          <Input onChange={onValueChange} name="telefon" />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={() => addUserDetails()}>
            Adauga
          </Button>
        </FormControl>
      </Container>
    </div>
  );
};
export default AddUser;
