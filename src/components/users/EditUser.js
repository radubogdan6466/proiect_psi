import { useState, useEffect } from "react";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import { getUser, editUser } from "../../service/api";
import { deleteUser } from "../../service/api.js";

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
  dataNastere: null,
  adresa: "",
  email: "",
  cetatetnie: "",
  stareCivila: "",
  dataAngajare: null,
};

const EditUser = () => {
  const [user, setUser] = useState(defaultValue);
  const [cnpError, setCnpError] = useState("");
  const [salBrutError, setSalBrutError] = useState("");
  const [telefonError, setTelefonError] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUser(id);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [id]);

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
      user.nume === "" ||
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

  const validateDateFormat = (value) => {
    const pattern = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/;
    return pattern.test(value);
  };

  const editUserDetails = async () => {
    if (!validateDateFormat(user.dataNastere)) {
      alert(
        "Formatul datei de naștere este invalid. Utilizați formatul DD/MM/YYYY."
      );
      return;
    }

    if (!validateDateFormat(user.dataAngajare)) {
      alert(
        "Formatul datei de angajare este invalid. Utilizați formatul DD/MM/YYYY."
      );
      return;
    }

    await editUser(user, id);
    navigate("/AllUsers");
  };
  const deleteUserDetails = async (id) => {
    const confirmDelete = window.confirm(
      "Sigur doriți să ștergeți utilizatorul? Toate datele se vor sterge!"
    );

    if (confirmDelete) {
      await deleteUser(id);
      navigate("/AllUsers");
    }
  };

  return (
    <div>
      <NavBar />
      <Container>
        <Typography variant="h4">Modifică date angajat</Typography>
        <FormControl>
          <InputLabel>Nume</InputLabel>
          <Input
            onChange={onValueChange}
            name="nume"
            value={user.nume}
            required
          />
        </FormControl>
        <FormControl>
          <InputLabel>Prenume</InputLabel>
          <Input
            onChange={onValueChange}
            name="prenume"
            value={user.prenume}
            required
          />
        </FormControl>
        <FormControl>
          <InputLabel>Sal Brut</InputLabel>
          <Input
            onChange={onValueChange}
            name="salBrut"
            value={user.salBrut}
            required
          />
          {salBrutError && <span style={{ color: "red" }}>{salBrutError}</span>}
        </FormControl>
        <FormControl>
          <InputLabel>Cnp</InputLabel>
          <Input
            onChange={onValueChange}
            name="cnp"
            value={user.cnp}
            required
          />
          {cnpError && <span style={{ color: "red" }}>{cnpError}</span>}
        </FormControl>
        <FormControl>
          <InputLabel>Functia</InputLabel>
          <Input
            onChange={onValueChange}
            name="functia"
            value={user.functia}
            required
          />
        </FormControl>
        <FormControl>
          <InputLabel>Telefon</InputLabel>
          <Input
            onChange={onValueChange}
            name="telefon"
            value={user.telefon}
            required
          />
          {telefonError && <span style={{ color: "red" }}>{telefonError}</span>}
        </FormControl>
        <FormControl>
          <InputLabel>Data Nasterii (zi/luna/an)</InputLabel>
          <Input
            onChange={onValueChange}
            name="dataNastere"
            value={user.dataNastere}
            required
          />
          {!validateDateFormat(user.dataNastere) && (
            <span style={{ color: "red" }}>
              Formatul trebuie să fie zi/luna/an
            </span>
          )}
        </FormControl>
        <FormControl>
          <InputLabel>Adresa</InputLabel>
          <Input
            onChange={onValueChange}
            name="adresa"
            value={user.adresa}
            required
          />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            onChange={onValueChange}
            name="email"
            value={user.email}
            required
          />
        </FormControl>
        <FormControl>
          <InputLabel>Cetatetnie</InputLabel>
          <Input
            onChange={onValueChange}
            name="cetatetnie"
            value={user.cetatetnie}
            required
          />
        </FormControl>
        <FormControl>
          <InputLabel>Stare Civila</InputLabel>
          <Input
            onChange={onValueChange}
            name="stareCivila"
            value={user.stareCivila}
            required
          />
        </FormControl>
        <FormControl>
          <InputLabel>Data Angajarii (zi/luna/an)</InputLabel>
          <Input
            onChange={onValueChange}
            name="dataAngajare"
            value={user.dataAngajare}
            required
          />
          {!validateDateFormat(user.dataAngajare) && (
            <span style={{ color: "red" }}>
              Formatul trebuie să fie zi/luna/an
            </span>
          )}
        </FormControl>
        <FormControl>
          <Button
            variant="contained"
            color="success"
            onClick={editUserDetails}
            style={{ marginBottom: "20px" }}
            disabled={isButtonDisabled}
          >
            Modifică
          </Button>
          <Button
            color="error"
            variant="contained"
            onClick={() => deleteUserDetails(user._id)}
          >
            Sterge
          </Button>
        </FormControl>
      </Container>
    </div>
  );
};

export default EditUser;
