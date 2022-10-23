import axios from 'axios';

export const api = axios.create({baseURL:process.env.NODE_ENV === 'development'?'http://localhost:3000/api/':process.env.REACT_APP_API_BASE_URL})