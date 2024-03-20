import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


let cachedToken = null;

const instance = axios.create({
  baseURL: 'https://test.acpt.lk/api',
  headers: {
    Authorization: cachedToken ? `Bearer ${cachedToken}` : ''
  }
});
  instance.interceptors.request.use(
    async config => {
      try {
        const token = await AsyncStorage.getItem('stmToken');
        cachedToken = token;
        config.headers.Authorization = `Bearer ${cachedToken}`;
      } catch (error) {
        
  
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  export default instance;