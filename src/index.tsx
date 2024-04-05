import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ToastProvider from './utils/ToastProvider/ToastProvider';
import { HashRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
      <ToastProvider>
        <App />
      </ToastProvider>
    </Router>
  </React.StrictMode>
);
