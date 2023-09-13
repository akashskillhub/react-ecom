import axios from "axios";

const API = axios.create({
    // baseURL: "http://localhost:5000",
    baseURL: "https://ecom-5usx.onrender.com"
})

export default API