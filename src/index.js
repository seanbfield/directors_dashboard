import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';


axios.defaults.headers.put["Content-Type"] = "application/json"

if (process.env.NODE_ENV === 'development') {
    const username = process.env.REACT_APP_USER
    const password = process.env.REACT_APP_PASSWORD
    axios.defaults.auth = {
        username,
        password
    }
} else {
    axios.defaults.headers["X-userToken"] = window.servicenowUserToken
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
