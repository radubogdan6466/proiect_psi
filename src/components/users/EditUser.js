import { useState, useEffect } from "react";
import React from "react";
import AllUsers from "./AllUsers";
import { Navigate, useNavigate, useParams } from "react-router-dom";
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

import { editUser, getUser } from "../../service/api";

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

const EditUser = () => {
  const [user, setUser] = useState(defaultValue);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    loadUserDetails();
  }, []);
  const loadUserDetails = async () => {
    const response = await getUser(id);
    setUser(response.data);
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const editUserDetails = async () => {
    await editUser(user, id);
    navigate("/AllUsers");
  };
  return (
    <div>
      <NavBar />
      <Container>
        <Typography variant="h4">Modifica datele</Typography>
        <FormControl>
          <InputLabel>Nume</InputLabel>
          <Input onChange={onValueChange} name="nume" value={user.nume} />
        </FormControl>
        <FormControl>
          <InputLabel>Prenume</InputLabel>
          <Input onChange={onValueChange} name="prenume" value={user.prenume} />
        </FormControl>
        <FormControl>
          <InputLabel>Sal Brut</InputLabel>
          <Input onChange={onValueChange} name="salBrut" value={user.salBrut} />
        </FormControl>
        <FormControl>
          <InputLabel>Cnp</InputLabel>
          <Input onChange={onValueChange} name="cnp" value={user.cnp} />
        </FormControl>
        <FormControl>
          <InputLabel>Functia</InputLabel>
          <Input onChange={onValueChange} name="functia" value={user.functia} />
        </FormControl>
        <FormControl>
          <InputLabel>Telefon</InputLabel>
          <Input onChange={onValueChange} name="telefon" value={user.telefon} />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={() => editUserDetails()}>
            Modifica Date
          </Button>
        </FormControl>
      </Container>
    </div>
  );
};
export default EditUser;
