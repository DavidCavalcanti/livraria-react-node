import styled from "styled-components"

const OpcaoContainer = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 16px;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`
const OpcoesContainer = styled.ul`
    display:flex;
`

const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS']

function OpcoesHeader() {
    return (
        <OpcoesContainer >
            {textoOpcoes.map(texto => (
                <OpcaoContainer><p>{texto}</p></OpcaoContainer>
            ))}
        </OpcoesContainer>
    )
}

export default OpcoesHeader