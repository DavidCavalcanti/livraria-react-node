import fs from "fs";

export function getTodosLivros() { return JSON.parse(fs.readFileSync("livros.json")); }

export function getLivroId(id) {
    const livro = JSON.parse(fs.readFileSync("livros.json")).filter(livro => livro.id === id)
    return livro;
}