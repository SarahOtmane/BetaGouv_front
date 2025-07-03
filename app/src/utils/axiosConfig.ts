import axios from 'axios';

const isDocker = window.location.hostname !== 'localhost';

const baseURL = isDocker
  ? 'http://node:3006/auth'
  : 'http://localhost:3006/auth';

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if ([401, 403].includes(error.response?.status)) {
      console.warn('Non autorisé');
      window.location.href = '/auth_entreprise';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
