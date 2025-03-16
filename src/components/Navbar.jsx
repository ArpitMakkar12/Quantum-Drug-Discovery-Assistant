import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Atom, Brain, FlaskRound as Flask, BookOpen, LayoutDashboard } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: LayoutDashboard, text: 'Dashboard' },
    { path: '/simulator', icon: Atom, text: 'Molecule Simulator' },
    { path: '/predictor', icon: Brain, text: 'Property Predictor' },
    { path: '/research', icon: Flask, text: 'Research' },
    { path: '/docs', icon: BookOpen, text: 'Documentation' },
  ];

  return (
    <nav className="bg-black/30 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Atom className="w-8 h-8 text-purple-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Quantum Drug Discovery
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-purple-500/20 text-purple-400'
                      : 'text-gray-300 hover:bg-purple-500/10 hover:text-purple-400'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.text}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;