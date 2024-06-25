import axios from "axios";

const instance = axios.create({
  baseURL: "https://amzon-backend-ki9v.onrender.com",
});

export default instance;
