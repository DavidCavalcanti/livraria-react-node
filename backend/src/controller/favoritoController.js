import { getTodosFavoritos, insertFavorito, removeFavorito } from "../services/favoritoServices.js";

class FavoritoController {

    static listarTodosFavoritos(req, res) {
        try {
            const buscarFavoritos = getTodosFavoritos();
            res.status(200).json(buscarFavoritos)
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição` });
        }
    }

    static adicionarFavorito(req, res) {
        try {
            const { id } = req.params;
            console.log(id)
            if (id >= 0 && id !== null) {
                insertFavorito(id);
                res.status(201).json({ message: "Livro favorito adicionado! ;-)" });
            } else {
                res.status(422).json({ message: "Id informado inválido!" });
            }

        } catch (erro) {
            res.status(400).json({ message: `${erro.message}` });
        }
    }
    static removerFavorito(req, res) {
        try {
            const { id } = req.params;

            if (id >= 0 && id !== null) {
                removeFavorito(id);
                res.status(200).json({ message: "Livro favorito removido!" });
            } else {
                res.status(404).json({ message: "Livro não encontrado! :-/" })
            }
        } catch (erro) {
            res.status(500).json({ message: `${erro.message}` });
        }
    }


}

export default FavoritoController;