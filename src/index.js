import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import AnalyzeSurvey from './AnalyzeSurvey';
import AnalyzeCSV from './AnalyzeCSV';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Navbar/>}>
          <Route index element={<App/>}/>
          <Route path = '/analyzecsv' element={<AnalyzeCSV/>}/>
          <Route path = '/analyzesurvey' element = {<AnalyzeSurvey/>}/>
        </Route>
        <Route path='/example' element = {<example/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
