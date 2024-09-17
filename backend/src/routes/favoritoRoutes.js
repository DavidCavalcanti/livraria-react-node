import express from "express";
import FavoritoController from "../controller/favoritoController.js";

const favoritoRoutes = express.Router();

favoritoRoutes
    .get('/favoritos', FavoritoController.listarTodosFavoritos)


export default favoritoRoutes;