import axios from "axios";

const favoritosAPI = axios.create({ baseURL: "http://localhost:8000/favoritos" });

export async function getFavoritos() {
    const response = await favoritosAPI.get('/');

    return response.data;
}
