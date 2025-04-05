import axios from "axios";
import { environment } from "../environments/environments";

const api = axios.create({
  baseURL: environment.apiUrl,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json",
  },
});



export default api;
