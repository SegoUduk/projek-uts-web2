import axios from 'axios';

// Konfigurasi default Axios
const API = axios.create({
  baseURL: 'http://localhost:4000/api', // Ganti dengan URL backend Anda
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fungsi untuk menangani error
const handleError = (error) => {
  console.error('API Error:', error.message); // Log error di console
  throw error.response?.data?.message || 'Terjadi kesalahan pada API';
};

/* ================= USER API ================= */

// Mengambil semua data pengguna
export const getAllUsers = async () => {
  try {
    const response = await API.get('/users');
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Mengambil data pengguna berdasarkan ID
export const getUserById = async (id) => {
  try {
    const response = await API.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Registrasi pengguna baru
export const registerUser = async (data) => {
  try {
    const response = await API.post('/users', data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Login pengguna
export const loginUser = async (data) => {
  try {
    const response = await API.post('/users/login', data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Mengupdate profil pengguna
export const updateUserProfile = async (id, data) => {
  try {
    const response = await API.put(`/users/${id}`, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Menghapus pengguna berdasarkan ID
export const deleteUser = async (id) => {
  try {
    const response = await API.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

/* ================= JOBS API ================= */

// Mengambil semua pekerjaan
export const getAllJobs = async () => {
  try {
    const response = await API.get('/jobs');
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Mengambil detail pekerjaan berdasarkan ID
export const getJobById = async (id) => {
  try {
    const response = await API.get(`/jobs/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Mencari pekerjaan berdasarkan filter
export const searchJobs = async (filters) => {
  try {
    const params = new URLSearchParams(filters);
    const response = await API.get(`/jobs/search?${params.toString()}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Membuat pekerjaan baru
export const createJob = async (data) => {
  try {
    const response = await API.post('/jobs', data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Mengupdate status pekerjaan (contoh: approved, rejected)
export const updateJobStatus = async (id, status) => {
  try {
    const response = await API.put(`/jobs/${id}/status`, { status });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Menghapus pekerjaan berdasarkan ID
export const deleteJob = async (id) => {
  try {
    const response = await API.delete(`/jobs/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

/* ================= APPLICATIONS API ================= */

// Mengambil daftar aplikasi berdasarkan ID pekerjaan
export const getApplicationsByJob = async (jobId) => {
  try {
    const response = await API.get(`/applications/job/${jobId}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Membuat aplikasi baru untuk pekerjaan
export const createApplication = async (data) => {
  try {
    const response = await API.post('/applications', data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Mengupdate status aplikasi pekerjaan
export const updateApplicationStatus = async (id, status) => {
  try {
    const response = await API.put(`/applications/${id}/status`, { status });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

/* ================= NOTIFICATIONS API ================= */

// Mengambil daftar notifikasi berdasarkan ID pengguna
export const getNotificationsByUser = async (userId) => {
  try {
    const response = await API.get(`/notifications/user/${userId}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Membuat notifikasi baru
export const createNotification = async (data) => {
  try {
    const response = await API.post('/notifications', data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Menandai notifikasi sebagai sudah dibaca
export const markNotificationAsRead = async (id) => {
  try {
    const response = await API.put(`/notifications/${id}/read`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

/* ================= ADMIN-SPECIFIC API ================= */

// Mengambil daftar pekerjaan yang menunggu persetujuan
export const getPendingJobs = async () => {
  try {
    const response = await API.get('/admin/pending-jobs');
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Mengambil daftar pekerjaan yang sudah disetujui
export const getApprovedJobs = async () => {
  try {
    const response = await API.get('/admin/approved-jobs');
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Menghapus pekerjaan sebagai admin
export const deleteJobAsAdmin = async (id) => {
  try {
    const response = await API.delete(`/admin/jobs/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};