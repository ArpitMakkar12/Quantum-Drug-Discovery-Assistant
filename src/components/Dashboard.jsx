import React from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Microscope, Dna, Brain, Database } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const mockChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Molecules Analyzed',
      data: [65, 78, 90, 120, 150, 180],
      borderColor: 'rgb(147, 51, 234)',
      backgroundColor: 'rgba(147, 51, 234, 0.5)',
    },
  ],
};

const stats = [
  {
    title: 'Molecules Simulated',
    value: '6',
    icon: Microscope,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Drug Candidates',
    value: '13',
    icon: Dna,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'ML Predictions',
    value: '15',
    icon: Brain,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Database Entries',
    value: '25,890',
    icon: Database,
    color: 'from-orange-500 to-red-500',
  },
];

function Dashboard() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4 text-center"
      >
        <h1 className="text-4xl font-bold text-white">
          Quantum Drug Discovery Assistant
        </h1>
        <p className="text-xl text-gray-300">
          Accelerating drug discovery through quantum computing and AI
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 border bg-black/30 backdrop-blur-lg rounded-xl border-white/10"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400">{stat.title}</p>
                  <p className="text-2xl font-bold text-white">
                    {stat.value}
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-6 border bg-black/30 backdrop-blur-lg rounded-xl border-white/10"
      >
        <h2 className="mb-4 text-xl font-bold text-white">Analysis Trends</h2>
        <Line
          data={mockChartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                labels: {
                  color: 'white',
                },
              },
            },
            scales: {
              y: {
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)',
                },
                ticks: {
                  color: 'white',
                },
              },
              x: {
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)',
                },
                ticks: {
                  color: 'white',
                },
              },
            },
          }}
        />
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="p-6 border bg-black/30 backdrop-blur-lg rounded-xl border-white/10"
        >
          <h2 className="mb-4 text-xl font-bold text-white">Recent Discoveries</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center p-3 space-x-4 rounded-lg bg-white/5">
                <Dna className="w-6 h-6 text-purple-400" />
                {/* <div>
                  <p className="font-medium text-white">Molecule #{i}</p>
                  <p className="text-sm text-gray-400">Promising candidate for cancer treatment</p>
                </div> */}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="p-6 border bg-black/30 backdrop-blur-lg rounded-xl border-white/10"
        >
          <h2 className="mb-4 text-xl font-bold text-white">System Status</h2>
          <div className="space-y-4">
            {[
              { name: 'Quantum Simulator', status: 'Online', color: 'text-green-400' },
              { name: 'ML Pipeline', status: 'Processing', color: 'text-yellow-400' },
              { name: 'Database', status: 'Online', color: 'text-green-400' },
            ].map((item) => (
              <div key={item.name} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                <span className="text-white">{item.name}</span>
                <span className={item.color}>{item.status}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Dashboard;