import axios from "axios";

const api = axios.create({
  baseURL: "https://codevector-backend-t1yi.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
