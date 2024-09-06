import { getLivroId, getTodosLivros, insertLivro, patchLivro, removeLivro } from "../services/livroServices.js";

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

            if (livro.length !== 0) {
                res.status(200).json({ message: "Livro encontrado!", livro });
            } else {
                res.status(404).json({ message: "Livro não encontrado! :-/" })
            }

        } catch (erro) {
            res.status(500).json({ message: `Erro interno de servidor - ${erro.message}` });
        }


    }

    static criarLivro(req, res) {
        try {
            const { nome } = req.body;
            if (nome) {
                const novoLivro = insertLivro(req.body);
                res.status(201).json({ message: "Livro criado! ;-)" });
            } else {
                res.status(422).json({ message: "O campo 'nome' é obrigatório!" });
            }

        } catch (erro) {
            res.status(400).json({ message: `${erro.message}` });
        }
    }

    static atualizaLivro(req, res) {
        try {
            const livro = getLivroId(req.params.id);

            if (livro.length !== 0) {
                patchLivro(req.params.id, req.body)
                res.status(200).json({ message: `Livro Atualizado!` });
            } else {
                res.status(404).json({ message: "Livro não encontrado! :-/" })
            }

        } catch (erro) {
            res.status(500).json({ message: `${erro.message}` });
        }
    }

    static deletarLivro(req, res) {
        try {
            const livro = getLivroId(req.params.id);

            if (livro.length !== 0) {
                removeLivro(req.params.id);
                res.status(200).json({ message: "Livro removido!" });
            } else {
                res.status(404).json({ message: "Livro não encontrado! :-/" })
            }
        } catch (erro) {
            res.status(500).json({ message: `${erro.message}` });
        }
    }

}

export default LivroController;