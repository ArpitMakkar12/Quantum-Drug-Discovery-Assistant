import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import MoleculeSimulator from './components/MoleculeSimulator';
import PropertyPredictor from './components/PropertyPredictor';
import Research from './components/Research';
import Documentation from './components/Documentation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/simulator" element={<MoleculeSimulator />} />
            <Route path="/predictor" element={<PropertyPredictor />} />
            <Route path="/research" element={<Research />} />
            <Route path="/docs" element={<Documentation />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
