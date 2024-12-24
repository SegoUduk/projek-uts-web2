import axios from 'axios';

// Base URL untuk API backend Anda
const API_URL = 'http://localhost:5000/api'; // Ganti <port> dengan port backend Anda

// Konfigurasi dasar Axios
export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// **1. Fungsi untuk mendaftarkan pengguna**
export const registerUser = async (data) => {
  try {
    const response = await api.post('/users/register', data);
    return response.data; // Mengembalikan respon dari backend
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// **2. Fungsi untuk login pengguna**
export const loginUser = async (data) => {
  try {
    const response = await api.post('/users/login', data);
    return response.data; // Mengembalikan token dan detail user
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// **3. Fungsi untuk mendapatkan data semua pengguna**
export const getUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data; // Mengembalikan daftar user
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// **4. Fungsi untuk mendapatkan data user berdasarkan ID**
export const getUserById = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data; // Mengembalikan detail user
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// **5. Fungsi untuk mendapatkan notifikasi berdasarkan user_id**
export const getNotifications = async (userId) => {
  try {
    const response = await api.get(`/notifications/${userId}`);
    return response.data; // Mengembalikan daftar notifikasi
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// **6. Fungsi untuk menambah notifikasi (khusus admin)**
export const addNotification = async (data) => {
  try {
    const response = await api.post('/notifications', data);
    return response.data; // Mengembalikan notifikasi yang berhasil ditambahkan
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// **7. Fungsi untuk mendapatkan daftar pekerjaan**
export const getJobs = async () => {
  try {
    const response = await api.get('/jobs');
    return response.data; // Mengembalikan daftar pekerjaan
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// **8. Fungsi untuk meng-upload pekerjaan baru**
export const uploadJob = async (data) => {
  try {
    const response = await api.post('/jobs', data);
    return response.data; // Mengembalikan pekerjaan yang berhasil ditambahkan
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// **9. Fungsi untuk mendapatkan detail pekerjaan berdasarkan ID**
export const getJobById = async (jobId) => {
  try {
    const response = await api.get(`/jobs/${jobId}`);
    return response.data; // Mengembalikan detail pekerjaan
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};

// **10. Fungsi untuk menghapus pekerjaan berdasarkan ID (khusus admin)**
export const deleteJob = async (jobId) => {
  try {
    const response = await api.delete(`/jobs/${jobId}`);
    return response.data; // Mengembalikan konfirmasi penghapusan pekerjaan
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};
