import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { LanguageProvider } from './context/language';

// Components
import { Test } from "./components/test";


ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
      <Test/>
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
