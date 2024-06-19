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
        const cusId=await AsyncStorage.getItem('cusId');
        cachedToken = token;
        cacheId =cusId;
        config.headers.Authorization = `Bearer ${cachedToken}`;
      
      } catch (error) {
        console.error('Error retrieving token or customerId:', error); 
  
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );
  export default instance;
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";

// let cachedToken = null;

// const instance = axios.create({
//   baseURL: 'http://192.168.104.81:8080/riyapola',
//   headers: {
//     Authorization: cachedToken ? `Bearer ${cachedToken}` : ''
//   }
// });

// // Request interceptor to add token and customerId to headers
// instance.interceptors.request.use(
//   async config => {
//     try {
//       // Retrieve token and customerId from AsyncStorage
//       const token = await AsyncStorage.getItem('stmToken');
//       const customerId = await AsyncStorage.getItem('customer_id');
      
//       // Set the cachedToken for subsequent requests
//       cachedToken = token;

//       // Add token to Authorization header
//       config.headers.Authorization = `Bearer ${cachedToken}`;

//       // Add customerId to the request parameters if customerId is available
//       if (customerId) {
//         config.params = { ...config.params, customerId };
//       }
//     } catch (error) {
//       console.error('Error retrieving token or customerId:', error);
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

// export default instance;
