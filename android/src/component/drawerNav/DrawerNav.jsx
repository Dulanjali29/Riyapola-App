
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import CarView from '../../pages/CarView/CarView';
import MyProfile from '../../pages/MyProfile/MyProfile';
import LoginCustomerCarView from '../../pages/LoginCustomerCarView/LoginCustomerCarView';

const Drawer = createDrawerNavigator();

export default function DrawerNav({navigation}) {
    const logOut=()=>{
        navigation.navigate('Login');
    }
    return (
       
        <Drawer.Navigator options={{backgroundColor:'#673147'}} >
        <Drawer.Screen name="Home"  component={LoginCustomerCarView}  />
        <Drawer.Screen name="My Profile" component={MyProfile} />
        <Drawer.Screen name="Logout" component={logOut} />
      </Drawer.Navigator>
    )
}