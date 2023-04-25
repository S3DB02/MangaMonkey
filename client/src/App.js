import './App.css';
import CarouselCell from './Components/CarouselCell.js';

import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Manga from './Components/Manga.js';
import Chapter from './Components/Chapter.js';

function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<CarouselCell />} />
          <Route exact path="/manga/:id" element={<Manga />} />
          <Route exact path="/manga/:mangaId/:id" element={<Chapter />} />
        </Routes>
      </Router>
    </div>
    
  )
}

export default App;
