import axios from 'axios';

const instance = axios.create({
    // baseURL: "http://localhost:3001/api/"
    // baseURL: "https://jb-portfolio-server.onrender.com/api/"
    baseURL: process.env.baseURL;
})

export default instance;