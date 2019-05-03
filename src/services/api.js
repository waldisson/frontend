import axios from 'axios';

const api = axios.create({
    baseURL: 'https://oaprendiz.herokuapp.com'
});

export default api;