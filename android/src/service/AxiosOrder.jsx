import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

let cacheId=null;
let cachedToken = null;

const instance = axios.create({
  baseURL: 'http://192.168.8.130:8080/riyapola',
  headers: {
    Authorization: cachedToken ? `Bearer ${cachedToken}` : ''
  }
});
  instance.interceptors.request.use(
    async config => {
      try {
        const token = await AsyncStorage.getItem('stmToken');
        const cusId=await AsyncStorage.getItem('customer_id');
        cachedToken = token;
        cacheId =cusId;
        config.headers.Authorization = `Bearer ${cachedToken}`;
        console.log('id'+cacheId);
      } catch (error) {
        
  
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  export default instance;