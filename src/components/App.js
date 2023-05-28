import '../styles/App.css';
import Welcome from './Welcome';
import Technologies from './Technologies';
import AboutMe from './AboutMe';
import Projects from './Projects';
import SocialMedia from './SocialMedia';
import Filter from './Filter'
import Contact from './Contact';


function App() {
  return (

    <div className="App">


        <Welcome/>

      <div className='aplicacion-tareas'>
        
       <Technologies/>
       <AboutMe/>
        
        
      </div>

      <Projects/>
      

      <Filter/>

      <Contact/>

      <SocialMedia/>
      
    </div>
    
      

  );
}

export default App;
