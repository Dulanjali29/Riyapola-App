
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import CarView from '../../pages/CarView/CarView';
import MyProfile from '../../pages/MyProfile/MyProfile';
import { View } from 'react-native';
const Drawer = createDrawerNavigator();

export default function DrawerNav({navigation}) {
    const logOut=()=>{
        navigation.navigate('Login');
    }
    return (
       
        <Drawer.Navigator>
        <Drawer.Screen name="Home" component={CarView} />
        <Drawer.Screen name="My Profile" component={MyProfile} />
        <Drawer.Screen name="Logout" component={logOut} />
      </Drawer.Navigator>
    )
}