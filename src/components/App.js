import '../styles/App.css';
import Navbar from './NavBar';
import Welcome from './Welcome';
import boostrap from "../images/Boostrap.webp"
import css from "../images/Css.webp"
import html from "../images/Html.webp"
import javascript from "../images/Javascript.webp"
import react from "../images/React.webp"

function App() {
  return (

    <div className="App">

        <Navbar/> /
        <Welcome/>

      <div className='aplicacion-tareas'>
        
          <div className='principal-container'>
           <div className='tittle'><h1>This project is made with</h1></div>
            <div className='tareas-lista-principal'>
            <img className='tools' src={css} />
            <img className='tools' src={html} />
            <img className='tools' src={javascript} />
            <img className='tools' src={react} />
            <img className='tools' src={boostrap} />
            </div>

          </div>

          <div className='principal-container'>
           <div className='tittle'><h1>This project is made with</h1></div>
            <div className='tareas-lista-principal'>
            <img className='tools' src={css} />
            <img className='tools' src={html} />
            <img className='tools' src={javascript} />
            <img className='tools' src={react} />
            <img className='tools' src={boostrap} />
            </div>

          </div>
          


      </div>
     
    </div>
  );
}

export default App;
