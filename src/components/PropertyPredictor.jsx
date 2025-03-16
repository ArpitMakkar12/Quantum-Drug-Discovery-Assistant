import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Search, RotateCw } from 'lucide-react';

function PropertyPredictor() {
  const [isPredicting, setIsPredicting] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handlePredict = () => {
    if (!searchQuery) return;
    setIsPredicting(true);
    setTimeout(() => setIsPredicting(false), 2000);
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold text-white">
          Quantum Property Predictor
        </h1>
        <p className="text-xl text-gray-300">
          Predict molecular properties using quantum neural networks
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter SMILES notation or molecule name..."
            className="w-full px-4 py-3 bg-black/30 backdrop-blur-lg rounded-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
          />
          <button
            onClick={handlePredict}
            disabled={!searchQuery || isPredicting}
            className="absolute right-2 top-2 px-4 py-1 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 disabled:cursor-not-allowed rounded-lg text-white font-medium transition-colors"
          >
            {isPredicting ? (
              <RotateCw className="w-5 h-5 animate-spin" />
            ) : (
              <Search className="w-5 h-5" />
            )}
          </button>
        </div>
      </motion.div>

      {!isPredicting && searchQuery && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <h2 className="text-xl font-bold text-white mb-4">
              Predicted Properties
            </h2>
            <div className="space-y-4">
              {[
                { name: 'Solubility', value: '2.45 mg/mL' },
                { name: 'Bioavailability', value: '85%' },
                { name: 'Toxicity', value: 'Low' },
                { name: 'Half-life', value: '4.2 hours' },
              ].map((property) => (
                <div
                  key={property.name}
                  className="flex items-center justify-between p-3 rounded-lg bg-white/5"
                >
                  <span className="text-gray-300">{property.name}</span>
                  <span className="text-white font-medium">{property.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <h2 className="text-xl font-bold text-white mb-4">
              Similar Molecules
            </h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center space-x-4 p-3 rounded-lg bg-white/5"
                >
                  <Brain className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="text-white font-medium">Similar Molecule #{i}</p>
                    <p className="text-gray-400 text-sm">
                      Similarity score: {(Math.random() * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10"
      >
        <h2 className="text-xl font-bold text-white mb-4">Model Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Model Type', value: 'Quantum Neural Network' },
            { label: 'Training Data', value: '250,000 molecules' },
            { label: 'Last Updated', value: '2 hours ago' },
            { label: 'Accuracy', value: '94.5%' },
            { label: 'Quantum Bits', value: '8 qubits' },
            { label: 'Circuit Depth', value: '12 layers' },
          ].map((item) => (
            <div key={item.label} className="bg-white/5 rounded-lg p-4">
              <p className="text-gray-400">{item.label}</p>
              <p className="text-white font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default PropertyPredictor;