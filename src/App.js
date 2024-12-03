import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BerandaAdmin from './pages/Beranda/BerandaAdmin';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Semua routing aplikasi didefinisikan di sini */}
        <Routes>
          <Route path="/" element={<BerandaAdmin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
