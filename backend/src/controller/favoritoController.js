import { getTodosFavoritos } from "../services/favoritoServices.js";

class FavoritoController {

    static listarTodosFavoritos(req, res) {
        try {
            const buscarFavoritos = getTodosFavoritos();
            res.status(200).json(buscarFavoritos)
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição` });
        }
    }
}

export default FavoritoController;