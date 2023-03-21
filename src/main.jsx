import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';

import Home from './pages/Home';
import Work from './pages/Home/Work';
import About from './pages/Home/About';
import Contact from './pages/Home/Contact';
import Experience from './pages/Home/Experience';


import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/work' element={<Work />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/experiece' element={<Experience />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
