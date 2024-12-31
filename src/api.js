import axios from 'axios';

// Konfigurasi default Axios
const API = axios.create({
  baseURL: 'http://localhost:4000/api', // Ganti dengan URL backend Anda
  headers: {
    'Content-Type': 'application/json',
  },
});

// *** USER API ***
export const getAllUsers = async () => {
  const response = await API.get('/users');
  return response.data;
};

export const getUserById = async (id) => {
  const response = await API.get(`/users/${id}`);
  return response.data;
};

export const registerUser = async (data) => {
  const response = await API.post('/users', data);
  return response.data;
};

export const loginUser = async (data) => {
  const response = await API.post('/users/login', data);
  return response.data;
};

export const updateUserProfile = async (id, data) => {
  const response = await API.put(`/users/${id}`, data);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await API.delete(`/users/${id}`);
  return response.data;
};

// *** JOBS API ***
export const getAllJobs = async () => {
  const response = await API.get('/jobs');
  return response.data;
};

export const getJobById = async (id) => {
  const response = await API.get(`/jobs/${id}`);
  return response.data;
};

export const searchJobs = async (filters) => {
  const params = new URLSearchParams(filters);
  const response = await API.get(`/jobs/search?${params.toString()}`);
  return response.data;
};

export const createJob = async (data) => {
  const response = await API.post('/jobs', data);
  return response.data;
};

export const updateJobStatus = async (id, status) => {
  const response = await API.put(`/jobs/${id}/status`, { status });
  return response.data;
};

// *** APPLICATIONS API ***
export const getApplicationsByJob = async (jobId) => {
  const response = await API.get(`/applications/job/${jobId}`);
  return response.data;
};

export const createApplication = async (data) => {
  const response = await API.post('/applications', data);
  return response.data;
};

export const updateApplicationStatus = async (id, status) => {
  const response = await API.put(`/applications/${id}/status`, { status });
  return response.data;
};

// *** NOTIFICATIONS API ***
export const getNotificationsByUser = async (userId) => {
  const response = await API.get(`/notifications/user/${userId}`);
  return response.data;
};

export const createNotification = async (data) => {
  const response = await API.post('/notifications', data);
  return response.data;
};

export const markNotificationAsRead = async (id) => {
  const response = await API.put(`/notifications/${id}/read`);
  return response.data;
};

// *** ADMIN-SPECIFIC API ***
export const getPendingJobs = async () => {
  const response = await API.get('/admin/pending-jobs');
  return response.data;
};

export const getApprovedJobs = async () => {
  const response = await API.get('/admin/approved-jobs');
  return response.data;
};

export const deleteJob = async (id) => {
  const response = await API.delete(`/jobs/${id}`);
  return response.data;
};
