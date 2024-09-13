import fs from "fs"

export function getTodosFavoritos() { return JSON.parse(fs.readFileSync("favoritos.json")); }

export function insertFavorito(id) {
    const livros = JSON.parse((fs.readFileSync("livros.json")));
    const livroInserido = livros.find(livro => livro.id == id);

    fs.writeFileSync("favoritos.json", JSON.stringify([...getTodosFavoritos(), ...livroInserido]));
}

export function removeFavorito(id) {
    const livrosFiltrado = getTodosFavoritos().filter(livros => livros.id !== id);
    fs.writeFileSync("favoritos.json", JSON.stringify(livrosFiltrado));
}