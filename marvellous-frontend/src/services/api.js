import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:8080' });
API.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
export const login = (data) => API.post('/api/auth/login', data);
export const register = (data) => API.post('/api/auth/register', data);
export const getBatches = () => API.get('/batches');
export const createBatch = (data) => API.post('/batches', data);
export const deleteBatch = (id) => API.delete(`/batches/${id}`);
export const updateBatch = (id, data) => API.put(`/batches/${id}`, data);
