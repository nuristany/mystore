import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>  
    </BrowserRouter>

   
  </React.StrictMode>
);

