import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Home from './pages/Home.js';
import JobSearch from './pages/JobSearch.js';
import FormApplication from './pages/FormApplication.js';
import UploadJob from './pages/UploadJob.js';
import Profil from './pages/Profil.js';
import Biodata from './pages/Biodata.js';
import Notification from './pages/Notification.js';
import HistoriLamaran from './pages/HistoriLamaran.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import JobCard from './components/JobCard.js';
import JobDetail from './components/JobDetail.js';
import JobList from './components/JobList.js';
import HistoryUploadJobs from './pages/HistoryUploadJobs.js';

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
          <Route path='/Navbar' element={<Navbar />} />
          <Route path='/Footer' element={<Footer />} />
          <Route path='/JobCard' element={<JobCard />} />
          <Route path='/JobDetail' element={<JobDetail />} />
          <Route path='/JobList' element={<JobList />} />
          <Route path='/HistoryUploadJobs' element={<HistoryUploadJobs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
