import axios from "axios";

export const makePequest = axios.create({
  baseURL: "http://localhost:8000/api/",
  withCredentials: true,
});
