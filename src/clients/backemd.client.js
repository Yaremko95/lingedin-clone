import axios from "axios";

const backend = axios.create({
  baseURL: "http://localhost:3004/api",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

export default backend;
