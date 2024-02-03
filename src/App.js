import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/portfolio/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


