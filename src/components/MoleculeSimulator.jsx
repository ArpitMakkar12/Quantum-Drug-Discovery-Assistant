import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Atom, RotateCw, Download, Check } from 'lucide-react';

function MoleculeSimulator() {
  const [isSimulating, setIsSimulating] = useState(false);
  const [selectedMolecule, setSelectedMolecule] = useState('');

  const molecules = [
    { id: 1, name: 'Aspirin', formula: 'C9H8O4' },
    { id: 2, name: 'Caffeine', formula: 'C8H10N4O2' },
    { id: 3, name: 'Paracetamol', formula: 'C8H9NO2' },
  ];

  const handleSimulate = () => {
    if (!selectedMolecule) return;
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 3000);
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold text-white">Quantum Molecule Simulator</h1>
        <p className="text-xl text-gray-300">
          Simulate molecular properties using quantum computing algorithms
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10"
        >
          <h2 className="text-xl font-bold text-white mb-4">Select Molecule</h2>
          <div className="space-y-4">
            {molecules.map((molecule) => (
              <button
                key={molecule.id}
                onClick={() => setSelectedMolecule(molecule.name)}
                className={`w-full p-4 rounded-lg transition-colors ${
                  selectedMolecule === molecule.name
                    ? 'bg-purple-500/30 border-purple-500'
                    : 'bg-white/5 border-transparent'
                } border hover:border-purple-500`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-white font-medium">{molecule.name}</p>
                    <p className="text-gray-400">{molecule.formula}</p>
                  </div>
                  {selectedMolecule === molecule.name && (
                    <Check className="w-5 h-5 text-purple-400" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10"
        >
          <h2 className="text-xl font-bold text-white mb-4">Simulation Parameters</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">Temperature (K)</label>
              <input
                type="range"
                min="0"
                max="1000"
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Pressure (atm)</label>
              <input
                type="range"
                min="1"
                max="100"
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Quantum Circuit Depth</label>
              <input
                type="range"
                min="1"
                max="10"
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex justify-center space-x-4"
      >
        <button
          onClick={handleSimulate}
          disabled={!selectedMolecule || isSimulating}
          className="flex items-center space-x-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 disabled:cursor-not-allowed rounded-lg text-white font-medium transition-colors"
        >
          {isSimulating ? (
            <>
              <RotateCw className="w-5 h-5 animate-spin" />
              <span>Simulating...</span>
            </>
          ) : (
            <>
              <Atom className="w-5 h-5" />
              <span>Start Simulation</span>
            </>
          )}
        </button>
        <button
          disabled={!selectedMolecule || isSimulating}
          className="flex items-center space-x-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed rounded-lg text-white font-medium transition-colors"
        >
          <Download className="w-5 h-5" />
          <span>Export Results</span>
        </button>
      </motion.div>

      {selectedMolecule && !isSimulating && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10"
        >
          <h2 className="text-xl font-bold text-white mb-4">Simulation Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Ground State Energy', 'Dipole Moment', 'Electron Density'].map((property) => (
              <div key={property} className="bg-white/5 rounded-lg p-4">
                <p className="text-gray-400">{property}</p>
                <p className="text-2xl font-bold text-white">
                  {Math.random().toFixed(4)}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default MoleculeSimulator;