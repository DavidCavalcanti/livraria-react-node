import express from "express"
import LivroController from "../controller/livroController.js";

const livroRoutes = express.Router();

livroRoutes
    .get("/livros", LivroController.listarTodosLivros)
    .get("/livros/:id", LivroController.buscaLivroId)

export default livroRoutes;