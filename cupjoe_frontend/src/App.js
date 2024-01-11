
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dash" element={<Dashboard />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;