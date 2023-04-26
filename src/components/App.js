import '../styles/App.css';
import Navbar from './NavBar';
import Welcome from './Welcome';
import Technologies from './Technologies';
import AboutMe from './AboutMe';

function App() {
  return (

    <div className="App">

        <Navbar/> 
        <Welcome/>

      <div className='aplicacion-tareas'>
        
      <Technologies/>
      <AboutMe/>
        
        
      </div>
     
    </div>
  );
}

export default App;
