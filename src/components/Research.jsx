import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';

function Research() {
  const papers = [
    {
      title: 'Quantum Variational Algorithms for Drug Discovery',
      authors: 'Smith, J., Johnson, M., et al.',
      date: '2025-02-15',
      journal: 'Nature Quantum Science',
      abstract: 'A comprehensive study of quantum variational algorithms applied to molecular property prediction...',
    },
    {
      title: 'Neural Networks in Quantum Chemistry',
      authors: 'Williams, R., Brown, K., et al.',
      date: '2025-01-20',
      journal: 'Quantum Machine Learning Review',
      abstract: 'An overview of neural network architectures designed for quantum chemistry applications...',
    },
    {
      title: 'Molecular Property Prediction Using Hybrid Quantum-Classical Approaches',
      authors: 'Davis, A., Miller, S., et al.',
      date: '2024-12-10',
      journal: 'Chemical Science Quantum',
      abstract: 'Novel approaches combining quantum computing with classical machine learning for molecular property prediction...',
    },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold text-white">Research Papers</h1>
        <p className="text-xl text-gray-300">
          Latest publications and research in quantum drug discovery
        </p>
      </motion.div>

      <div className="space-y-6">
        {papers.map((paper, index) => (
          <motion.div
            key={paper.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-white">{paper.title}</h2>
                <p className="text-purple-400">{paper.authors}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>{paper.date}</span>
                  <span>{paper.journal}</span>
                </div>
                <p className="text-gray-300 mt-4">{paper.abstract}</p>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                  <Download className="w-5 h-5 text-gray-400 hover:text-white" />
                </button>
                <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                  <ExternalLink className="w-5 h-5 text-gray-400 hover:text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Research Topics</h2>
          <div className="space-y-2">
            {[
              'Quantum Variational Algorithms',
              'Molecular Property Prediction',
              'Drug-Target Interaction',
              'Quantum Neural Networks',
              'Hybrid Computing Methods',
            ].map((topic) => (
              <div
                key={topic}
                className="flex items-center space-x-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <FileText className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">{topic}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10">
          <h2 className="text-xl font-bold text-white mb-4">Statistics</h2>
          <div className="space-y-4">
            {[
              { label: 'Published Papers', value: '156' },
              { label: 'Citations', value: '2,345' },
              
              { label: 'Contributing Authors', value: '89' },
              { label: 'Research Institutions', value: '42' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-between p-3 rounded-lg bg-white/5"
              >
                <span className="text-gray-300">{stat.label}</span>
                <span className="text-white font-medium">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Research;