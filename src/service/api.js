import axios from "axios";

const URL = "http://localhost:8000";
export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("ups, ceva gresit la api call", error);
  }
};
