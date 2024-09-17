import express from "express";
import FavoritoController from "../controller/favoritoController.js";

const favoritoRoutes = express.Router();

favoritoRoutes
    .get('/favoritos', FavoritoController.listarTodosFavoritos)
    .post('/favoritos/:id', FavoritoController.adicionarFavorito)
    .delete('/favoritos/:id', FavoritoController.removerFavorito)


export default favoritoRoutes;