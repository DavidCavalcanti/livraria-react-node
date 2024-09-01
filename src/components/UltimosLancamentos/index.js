import { livros } from "./dadosUltimosLancamentos";
import { Titulo } from "../Titulo";
import CardRecomenda from "../CardRecomenda";
import imagemAngular from "../../image/livro2.png"
import styled from "styled-components";

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 10px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>

            <Titulo
                cor='#EB9B00'
                tamanhoFonte='36px'
            >
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src} alt={livro.nome} />
                ))}
            </NovosLivrosContainer>

            <CardRecomenda
                titulo="Talvez você tenha interesse em"
                subtitulo="Angular 11"
                descricao="Contruindo uma aplicação integrada com Airflow."
                img={imagemAngular}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos;