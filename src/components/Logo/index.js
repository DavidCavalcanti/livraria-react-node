import './estilo.css';
import logo from '../../image/logo.svg';

function Logo() {
    return (
        <div className='logo'>
            <img
                src={logo}
                alt='Logo da livraria'
                className='log-img'>
            </img>

            <p>Mino<strong>Books</strong></p>
        </div>
    )
}

export default Logo;