import styled from "styled-components";
import Input from "../Input";
import { useEffect, useState } from "react";
import { getLivros } from "../../services/livros";
import livroImg from '../../image/livro.png'
import { postFavoritos } from "../../services/favoritos";

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {

    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    const [livros, setLivros] = useState([]);

    const handleSearch = (evento) => {
        const termoPesquisa = evento.target.value.trim(); // remove espaços em branco extras no início e no final do texto
        if (termoPesquisa) {
            const resultado = livros.filter(livro =>
                livro.nome.toLowerCase().includes(termoPesquisa.toLowerCase()) // garante que a pesquisa seja case insensitive (ou seja, sem diferenciar maiúsculas de minúsculas).
            );
            setLivrosPesquisados(resultado);
        } else {
            setLivrosPesquisados([]);
        }
    };

    useEffect(() => {
        fetchLivros();
    }, []);



    async function fetchLivros() {
        const livrosAPI = await getLivros();
        setLivros(livrosAPI);
    }

    async function insertFavorito(id) {
        await postFavoritos(id);
        alert(`Livro adicionado a página de favoritos!`)
    }

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onChange={handleSearch}
            />
            {livrosPesquisados.map(livro => (
                <Resultado onClick={() => insertFavorito(livro.id)}>
                    <img src={livroImg} alt='' />
                    <p>{livro.nome}</p>
                </Resultado>
            ))}
        </PesquisaContainer>
    )
}

export default Pesquisa;