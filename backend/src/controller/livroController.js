import fs from "fs";

class LivroController {

    static listarTodosLivros(req, res) {
        try {
            const buscarLivros = JSON.parse(fs.readFileSync("livros.json"));
            res.status(200).json(buscarLivros)
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição` });
        }
    }

}

export default LivroController;