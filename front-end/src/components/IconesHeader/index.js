import perfil from './../../image/perfil.svg'
import sacola from './../../image/sacola.svg'
import styled from 'styled-components'

const IconeContainer = styled.li`
    margin-right: 40px;
    width: 25px;
`
const IconesContainer = styled.ul`
    display: flex;  
    align-items: center;
`
const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <IconesContainer>
            {icones.map(icone => (
                <IconeContainer><img src={icone} alt=''></img></IconeContainer>
            ))}
        </IconesContainer>
    )
}

export default IconesHeader