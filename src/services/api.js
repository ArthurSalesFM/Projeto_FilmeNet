import axios from "axios";

// Base: https://api.themoviedb.org/3/
// URL da API: /movie/now_playing?api_key=d4244b842e7d0e1d660a15d86ee0b26e&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;