import axios from "axios";
const instance = axios.create({
    baseURL: 'http://localhost:8080/customer',
    headers: {
      Authorization: cachedToken ? `Bearer ${cachedToken}` : ''
    }
  });