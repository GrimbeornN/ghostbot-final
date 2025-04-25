import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Graph from './Graph';
import LiveLogs from './LiveLogs';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white p-6 font-mono">
        <h1 className="text-2xl font-bold mb-6">🎲 GhostBot - Primedice</h1>
        <nav className="mb-6 flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/graph">Graph</Link>
          <Link to="/logs">Live Logs</Link>
        </nav>
        <Routes>
          <Route path="/" element={<div>Homepage - GhostBot UI</div>} />
          <Route path="/graph" element={<Graph />} />
          <Route path="/logs" element={<LiveLogs />} />
        </Routes>
      </div>
    </Router>
  );
}