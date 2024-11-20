import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/Login.js';
import Register from './component/Register.js';
import Home from './component/Home.js';
import JobSearch from './component/JobSearch.js';
import FormApplication from './component/FormApplication.js';
import UploadJob from './component/UploadJob.js';
import Profil from './component/Profil.js';
import Biodata from './component/Biodata.js'
import Notification from './component/Notification.js';
import HistoriLamaran from './component/HistoriLamaran.js';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Home" element={<Home />} />
          <Route path='/JobSearch' element={<JobSearch />} />
          <Route path="/FormApplication" element={<FormApplication />} />
          <Route path='/UploadJob' element={<UploadJob />} />
          <Route path='/Profil' element={<Profil />} />
          <Route path='/Biodata' element={<Biodata />} />
          <Route path='/Notification' element={<Notification />} />
          <Route path='/HistoriLamaran' element={<HistoriLamaran />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
