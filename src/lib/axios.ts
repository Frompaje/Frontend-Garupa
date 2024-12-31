import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:3000/transfers",
  validateStatus: (status) => status >= 200 && status < 500,
});
