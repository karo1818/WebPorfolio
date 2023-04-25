import '../styles/App.css';
import freeCodeCampLogo from "../images/logo.png";
import ListaDeTareas from './ListaDeTareas';
import Navbar from './NavBar';
import Welcome from './Welcome';

function App() {
  return (


    <div className="App">

        <Navbar/> /*De esta manera llamo un componente */
        <Welcome/>

      <div className='aplicacion-tareas'>
        <div className='freecodecamp-logo-contenedor'>
          

        </div>
          <div className='tareas-lista-principal'>
            <h1>Mis tareas</h1>
              
              <ListaDeTareas/>
              

          </div>

      </div>
     
    </div>
  );
}

export default App;
