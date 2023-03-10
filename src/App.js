import logo from './logo.svg';
import './App.css';
import Agenda from './Componentes/contenedor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Titulo">Agenda React ITLA</p>
        <Agenda/>
        <div class="outer-footer">
        </div>
      </header>
    </div>
  );
}

export default App;