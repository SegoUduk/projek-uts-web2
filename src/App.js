import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BerandaAdmin from './pages/Beranda/BerandaAdmin';
import Navbar from './components/Navbar/NavbarAdmin';
import Footer from './components/Footer/FooterAdmin';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Semua routing aplikasi didefinisikan di sini */}
        <Routes>
          <Route path="/" element={<BerandaAdmin />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
