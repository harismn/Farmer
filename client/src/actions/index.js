import axios from 'axios';


export const service = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3001/article',
    headers: {
        "content-Type" : "application/json"
    }
  });
  