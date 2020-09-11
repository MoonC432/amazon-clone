import axios from "axios";

const instance = axios.create({
  baseURL: "api here",
});

export default instance;
