import fs from "fs";

export function getTodosLivros() { return JSON.parse(fs.readFileSync("livros.json")); }

export function getLivroId(id) {
    const livro = JSON.parse(fs.readFileSync("livros.json")).filter(livro => livro.id === id);
    return livro;
}

export function insertLivro(dados) {
    const livros = getTodosLivros();
    return fs.writeFileSync("livros.json", JSON.stringify([...livros, dados]));
}

export function patchLivro(id, modificacao) {
    let livros = JSON.parse(fs.readFileSync("livros.json"));
    const idModificacao = livros.findIndex(livro => livro.id === id);
    const conteudoAtualizado = { ...livros[idModificacao], ...modificacao };
    livros[idModificacao] = conteudoAtualizado;
    fs.writeFileSync("livros.json", JSON.stringify(livros));
}

export function removeLivro (id) {        
    const livrosFiltrado = getTodosLivros().filter(livro => livro.id !== id);    
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrado))    
}