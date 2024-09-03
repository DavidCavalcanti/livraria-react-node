import { getLivroId, getTodosLivros } from "../services/livroServices.js";

class LivroController {

    static listarTodosLivros(req, res) {
        try {
            const buscarLivros = getTodosLivros();
            res.status(200).json(buscarLivros)
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição` });
        }
    }

    static buscaLivroId(req, res) {
        try {
            const livro = getLivroId(req.params.id);
            console.log(livro);
            if (livro.length !== 0) {
                res.status(200).json({ message: "Livro encontrado!", livro });
            } else {
                res.status(404).json({ message: "Livro não encontrado! :-/" })
            }

        } catch (erro) {
            res.status(500).json({ message: `Erro interno de servidor - ${erro.message}` });
        }


    }

}

export default LivroController;