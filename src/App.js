import './App.css';
import Logo from './components/Logo/index.js';
import perfil from './image/perfil.svg'
import sacola from './image/sacola.svg'

const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS']
const icones = [perfil, sacola]

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Logo></Logo>
        <ul className='opcoes'>
          {textoOpcoes.map(texto => (
            <li className='opcao'><p>{texto}</p></li>
          ))}
        </ul>

        <ul className='icones'>
          {icones.map(icone => (
            <li className='icone'><img src={icone} alt=''></img></li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
