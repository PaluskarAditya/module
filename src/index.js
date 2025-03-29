import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';   
import Hub from './components/Hub';
import CTF from './components/CTF';
<<<<<<< HEAD
import Quiz from './components/Quiz';
=======
>>>>>>> 408156f (Most scenarios completed)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/home' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/home/:dept' element={<Hub />} />
          <Route path='/home/:dept/ctf' element={<CTF />} />
<<<<<<< HEAD
          <Route path='/home/:dept/quiz' element={<Quiz />} />
=======
          <Route path='/home/:dept/quiz' element={<CTF />} />
>>>>>>> 408156f (Most scenarios completed)
          <Route path='/home/:dept/misson' element={<CTF />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);