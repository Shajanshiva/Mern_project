import axios from "axios";

const API = axios.create({
    baseURL: "https://stage-seat-backend.onrender.com/api",
    withCredentials: true
});

// const API = axios.create({
//     baseURL: "http://localhost:5000/api",
//     withCredentials: true
// });

export default API