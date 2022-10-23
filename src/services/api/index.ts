import axios from 'axios';

export const api = axios.create({baseURL:process.env.REACT_APP_STAGE === 'development'?'http://localhost:3000/api/':process.env.REACT_APP_API_BASE_URL})