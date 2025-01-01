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
  console.error('API Error:', error.message);
  throw error.response?.data?.message || 'Terjadi kesalahan pada API';
};

// *** USER API ***
export const getAllUsers = async () => {
  try {
    const response = await API.get('/users');
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getUserById = async (id) => {
  try {
    const response = await API.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const registerUser = async (data) => {
  try {
    const response = await API.post('/users', data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const loginUser = async (data) => {
  try {
    const response = await API.post('/users/login', data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const updateUserProfile = async (id, data) => {
  try {
    const response = await API.put(`/users/${id}`, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await API.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// *** JOBS API ***
export const getAllJobs = async () => {
  try {
    const response = await API.get('/jobs');
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getJobById = async (id) => {
  try {
    const response = await API.get(`/jobs/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const searchJobs = async (filters) => {
  try {
    const params = new URLSearchParams(filters);
    const response = await API.get(`/jobs/search?${params.toString()}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const createJob = async (data) => {
  try {
    const response = await API.post('/jobs', data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const updateJobStatus = async (id, status) => {
  try {
    const response = await API.put(`/jobs/${id}/status`, { status });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const deleteJob = async (id) => {
  try {
    const response = await API.delete(`/jobs/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// *** APPLICATIONS API ***
export const getApplicationsByJob = async (jobId) => {
  try {
    const response = await API.get(`/applications/job/${jobId}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const createApplication = async (data) => {
  try {
    const response = await API.post('/applications', data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const updateApplicationStatus = async (id, status) => {
  try {
    const response = await API.put(`/applications/${id}/status`, { status });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// *** NOTIFICATIONS API ***
export const getNotificationsByUser = async (userId) => {
  try {
    const response = await API.get(`/notifications/user/${userId}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const createNotification = async (data) => {
  try {
    const response = await API.post('/notifications', data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const markNotificationAsRead = async (id) => {
  try {
    const response = await API.put(`/notifications/${id}/read`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// *** ADMIN-SPECIFIC API ***
export const getPendingJobs = async () => {
  try {
    const response = await API.get('/admin/pending-jobs');
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const getApprovedJobs = async () => {
  try {
    const response = await API.get('/admin/approved-jobs');
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

export const deleteJobAsAdmin = async (id) => {
  try {
    const response = await API.delete(`/admin/jobs/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};
