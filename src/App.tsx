import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/guitar-beats">
        <Routes>
          <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
