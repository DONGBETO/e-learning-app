import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Efface les fausses connexions au lancement local (utile en dev)
if (import.meta.env.DEV) {
  localStorage.removeItem('user');
}
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);