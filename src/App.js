import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/Login.js';
import Register from './component/Register.js';
import Home from './component/Home.js';
import JobSearch from './component/JobSearch.js';
import FormApplication from './component/FormApplication.js';
import UploadJob from './component/UploadJob.js';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Home" element={<Home/>} />
          <Route path='/JobSearch' element={<JobSearch/>} />
          <Route path="/FormApplication" element={<FormApplication/>} />
          <Route path='/UploadJob' element={<UploadJob/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
