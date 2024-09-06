import express from "express"
import LivroController from "../controller/livroController.js";

const livroRoutes = express.Router();

livroRoutes
    .get("/livros", LivroController.listarTodosLivros)
    .get("/livros/:id", LivroController.buscaLivroId)
    .post("/livros", LivroController.criarLivro)
    .patch("/livros/:id", LivroController.atualizaLivro)
    .delete("/livros/:id", LivroController.deletarLivro) 

export default livroRoutes;