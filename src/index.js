import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Navbar from './components/NavBar';



ReactDOM.render(
  <React.StrictMode>
    <Navbar/> 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
