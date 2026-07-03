import axios from "axios";

const api = axios.create({
  baseURL: "https://zerotrade-eidw.onrender.com",
  //  baseURL: "http://localhost:3002",
  withCredentials: true,
});

export default api;