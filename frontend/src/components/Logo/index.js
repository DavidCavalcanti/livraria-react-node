import logo from '../../image/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display:flex;
    font-size: 30px;   
`

const LogoImage = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer >
            <LogoImage
                src={logo}
                alt='Logo da livraria'
            />

            <p>Mino<strong>Books</strong></p>
        </LogoContainer>
    )
}

export default Logo