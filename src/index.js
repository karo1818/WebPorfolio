import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import createUsers from './users';

const firebaseConfig = {
  apiKey: "AIzaSyBj8-UMknmwlnvXxVCWswPYs-Di4JFaVu8",
  authDomain: "portfolio-b281a.firebaseapp.com",
  projectId: "portfolio-b281a",
  storageBucket: "portfolio-b281a.appspot.com",
  messagingSenderId: "410379821208",
  appId: "1:410379821208:web:4cd33ef556d4b643b2f0ed",
  measurementId: "G-N2BGZZLVS6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
createUsers();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
