import axios from 'axios';

const instance = axios.create({
    // baseURL: "http://localhost:3001/api/"
    baseURL: "https://jb-portfolio-server.onrender.com:3001/api/"
})

export default instance;