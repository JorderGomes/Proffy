import axios from 'axios';
// import { url } from 'inspector';

const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;

