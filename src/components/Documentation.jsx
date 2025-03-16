import React from 'react';
import { motion } from 'framer-motion';
import { Book, Code, Terminal, Database, Cpu } from 'lucide-react';

function Documentation() {
  const sections = [
    {
      title: 'Getting Started',
      icon: Book,
      content: [
        'Introduction to Quantum Drug Discovery',
        'System Requirements',
        'Installation Guide',
        'Quick Start Tutorial',
      ],
    },
    {
      title: 'API Reference',
      icon: Code,
      content: [
        'Authentication',
        'Molecule Endpoints',
        'Simulation API',
        'Property Prediction',
      ],
    },
    {
      title: 'Command Line Tools',
      icon: Terminal,
      content: [
        'CLI Installation',
        'Basic Commands',
        'Advanced Usage',
        'Configuration',
      ],
    },
    {
      title: 'Database Schema',
      icon: Database,
      content: [
        'Table Structure',
        'Relationships',
        'Indexing',
        'Query Optimization',
      ],
    },
    {
      title: 'Quantum Computing',
      icon: Cpu,
      content: [
        'Circuit Design',
        'Algorithm Implementation',
        'Error Mitigation',
        'Hardware Integration',
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold text-white">Documentation</h1>
        <p className="text-xl text-gray-300">
          Comprehensive guides and references for the Quantum Drug Discovery platform
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Icon className="w-6 h-6 text-purple-400" />
                <h2 className="text-xl font-bold text-white">{section.title}</h2>
              </div>
              <div className="space-y-2">
                {section.content.map((item) => (
                  <button
                    key={item}
                    className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-gray-300 hover:text-white"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10"
      >
        <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            'Installation Guide',
            'API Documentation',
            'Examples',
            'Tutorials',
            'Best Practices',
            'Troubleshooting',
            'FAQ',
            'Support',
          ].map((link) => (
            <button
              key={link}
              className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-gray-300 hover:text-white text-center"
            >
              {link}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-white/10"
      >
        <h2 className="text-xl font-bold text-white mb-4">Need Help?</h2>
        <div className="text-gray-300">
          <p>
            If you can't find what you're looking for in the documentation, our support team is here to help:
          </p>
          <div className="mt-4 space-y-2">
            <button className="w-full p-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-colors">
              Contact Support
            </button>
            <button className="w-full p-3 bg-white/5 hover:bg-white/10 rounded-lg text-gray-300 hover:text-white transition-colors">
              Join Community Forum
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Documentation;