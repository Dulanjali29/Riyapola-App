import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


let cachedToken = null;

const instance = axios.create({
  baseURL: 'http://192.168.169.81:8080/riyapola',
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