import '../styles/App.css';
import Navbar from './NavBar';
import Welcome from './Welcome';
import Technologies from './Technologies';
import AboutMe from './AboutMe';
import Projects from './Projects';

function App() {
  return (

    <div className="App">

        <Navbar/> 
        <Welcome/>

      <div className='aplicacion-tareas'>
        
       <Technologies/>
       <AboutMe/>
        
        
      </div>

      <Projects/>
     
    </div>
  );
}

export default App;
