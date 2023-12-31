import axios from "axios";
const URL = "http://localhost:8000";
export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("ups, ceva gresit la api call", error);
  }
};
export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/all`);
  } catch (error) {
    console.log("ups, eroare la returnare utilizatori API", error);
  }
};

export const getUser = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log("error la chemare user api", error);
  }
};
export const editUser = async (user, id) => {
  try {
    return await axios.put(`${URL}/${id}`, user);
  } catch (error) {
    console.log("error la chemare user edit api", error);
  }
};
export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log("error la stergere user edit api", error);
  }
};
export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${URL}/login`, data);
    return response.data; // sau return response.data.isSuccess, în funcție de structura răspunsului API-ului
  } catch (error) {
    console.log("Ups, eroare la apelul API pentru autentificare", error);
    throw error; // aruncă eroarea pentru a o gestiona în codul de apel
  }
};
