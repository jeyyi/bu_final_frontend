import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import example from './example';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Navbar/>}>
          <Route index element={<App/>}/>
        </Route>
        <Route path='/example' element = {<example/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
