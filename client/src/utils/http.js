import axios from 'axios';

const instance = axios.create({
    // baseURL: "http://localhost:3001/api/"
    baseURL: "https://jb-portfolio-server.onrender.com:1000/api/"
})

export default instance;