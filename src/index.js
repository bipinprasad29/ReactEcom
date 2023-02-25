import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from './ContextApi/CartContext';
import DataContextProvider from './ContextApi/DataContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <CartContextProvider>
  <DataContextProvider>
  <App />
  </DataContextProvider>
  </CartContextProvider>
  </React.StrictMode>
);

