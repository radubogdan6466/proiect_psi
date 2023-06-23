import React, { useState, useEffect, useContext } from "react";

import {
  TextField,
  Container,
  Box,
  Button,
  Typography,
  styled,
  Alert,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import { API } from "../../service/apiUrl";
import { DataContext } from "../../context/DataProvider";
const ParentContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Setăm înălțimea containerului părinte la înălțimea totală a ecranului */
`;
const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
  display: flex; /* Adăugăm display flex pentru a alinia componenta în centru */
  justify-content: center; /* Aliniere orizontală în centru */
  align-items: center; /* Aliniere verticală în centru */
`;

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const loginInitialValues = {
  username: "",
  password: "",
};
const Login = ({ isUserAuthenticated }) => {
  const [login, setLogin] = useState(loginInitialValues);
  const [error, showError] = useState("");
  const [loginFailed, setLoginFailed] = useState(false); // Adăugat starea loginFailed

  const navigate = useNavigate();
  const { setAccount } = useContext(DataContext);

  useEffect(() => {
    showError(false);
  }, [login]);

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    if (!login.username || !login.password) {
      showError("Vă rugăm introduceți numele de utilizator și parola");
      return;
    }

    try {
      let response = await API.userLogin(login);
      if (response.isSuccess) {
        showError("");
        setLoginFailed(false);

        sessionStorage.setItem(
          "accessToken",
          `Bearer ${response.data.accessToken}`
        );
        sessionStorage.setItem(
          "refreshToken",
          `Bearer ${response.data.refreshToken}`
        );
        setAccount({
          name: response.data.name,
          username: response.data.username,
        });

        setLogin(loginInitialValues);
        navigate("/");
        isUserAuthenticated(true);
      } else {
        if (response.errorCode === "INVALID_CREDENTIALS") {
          showError("Nume de utilizator sau parolă incorecte");
        } else if (response.errorCode === "ACCOUNT_LOCKED") {
          showError("Contul este blocat. Vă rugăm să încercați mai târziu");
        } else {
          showError(
            "A apărut o problemă! Vă rugăm încercați din nou mai târziu"
          );
        }
        setLoginFailed(true);
      }
    } catch (error) {
      showError("A apărut o problemă! Vă rugăm încercați din nou mai târziu");
      setLoginFailed(true);
    }
  };

  return (
    <ParentContainer>
      <Component>
        <Box component="form">
          <Wrapper>
            <TextField
              variant="standard"
              value={login.username}
              onChange={(e) => onValueChange(e)}
              name="username"
              label="Introduceți Utilizator"
              margin="normal"
              required
              fullWidth
            />
            <TextField
              variant="standard"
              value={login.password}
              onChange={(e) => onValueChange(e)}
              name="password"
              label="Introduceți Parola"
              margin="normal"
              required
              fullWidth
            />
            {loginFailed && (
              <Error>
                Vă rugăm introduceți un nume de utilizator și o parolă valide
              </Error>
            )}
            <LoginButton variant="contained" onClick={() => loginUser()}>
              Autentificare
            </LoginButton>
          </Wrapper>
        </Box>
      </Component>
    </ParentContainer>
  );
};

export default Login;
