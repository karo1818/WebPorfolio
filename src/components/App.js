import '../styles/App.css';
import Navbar from './NavBar';
import Welcome from './Welcome';
import Technologies from './Technologies';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';


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


      <Contact/>
    </div>
    
      

  );
}

export default App;
