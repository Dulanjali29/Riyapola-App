
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Iconicons from 'react-native-vector-icons/Ionicons';

import MyProfile from '../../pages/MyProfile/MyProfile';
import LoginCustomerCarView from '../../pages/LoginCustomerCarView/LoginCustomerCarView';
// import ReservationPage from '../../pages/ReservationPage/ReservationPage';
import MyHistory from '../../pages/MyHistory/MyHistory';
import Info from '../../pages/Info/Info';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Drawer = createDrawerNavigator();

export default function DrawerNav({navigation}) {
    const logOut=()=>{

       removeToken()
    }
    removeToken = async () => {
        try {
          await AsyncStorage.removeItem('stmToken')
          const value = await AsyncStorage.getItem('stmtoken')
          if (value === null) {
            navigation.navigate('Login');
      
          } else {
            console.log("Error Log Out");
          }
      
      
        } catch (e) {
          console.log(e);
        }
      
      }
    return (
       
        <Drawer.Navigator options={{backgroundColor:'#673147'}} >

        <Drawer.Screen name="Home"  component={LoginCustomerCarView}  options={{
          drawerIcon:({color})=>(
            <Iconicons name="home-outline" size={22} color={color}/>
          )
        }}/>
       
        <Drawer.Screen name="My Profile" component={MyProfile} options={{
          drawerIcon:({color})=>(
            <Iconicons name="person-outline" size={22} color={color}/>
          )
        }}/>
        <Drawer.Screen name="My Histrory" component={MyHistory} options={{
          drawerIcon:({color})=>(
            <Iconicons name="car-outline" size={22} color={color}/>
          )
        }} />
        <Drawer.Screen name="Account Handle" component={Info} options={{
          drawerIcon:({color})=>(
            <Iconicons name="settings-outline" size={22} color={color}/>
          )
        }} />
        <Drawer.Screen name="Logout" component={logOut}  options={{
          drawerIcon:({color})=>(
            <Iconicons name="log-out-outline" size={22} color={color}/>
          )
        }}/>

      </Drawer.Navigator>
    )
}