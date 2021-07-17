import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './service/auth_service';

const authService = new AuthService();

console.log(process.env.REACT_APP_FIREBASE_API_KEY);
console.log(process.env.REACT_APP_FIREBASE_DOMAIN);
console.log(process.env.REACT_APP_FIREBASE_FIREBASE_PROJECT_ID);
console.log(process.env.REACT_APP_FIREBASE_FIREBASE_DB_URL);

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService}/>
  </React.StrictMode>,
  document.getElementById('root')
);