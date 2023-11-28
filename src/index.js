import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Global.css';
import { ThemeContextProvider } from './context/ThemeContext';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContextProvider>
      <App />
  </ThemeContextProvider>
);

