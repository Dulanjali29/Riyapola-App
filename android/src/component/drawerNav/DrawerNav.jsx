
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import CarView from '../../pages/CarView/CarView';
import MyProfile from '../../pages/MyProfile/MyProfile';
import LoginCustomerCarView from '../../pages/LoginCustomerCarView/LoginCustomerCarView';
import MyHistory from '../../pages/MyHistory/MyHistory';
import Info from '../../pages/Info/Info';

const Drawer = createDrawerNavigator();

export default function DrawerNav({navigation}) {
    const logOut=()=>{
        navigation.navigate('Login');
    }
    return (
       
        <Drawer.Navigator options={{backgroundColor:'#673147'}} >
        <Drawer.Screen name="Home"  component={LoginCustomerCarView}  />
        <Drawer.Screen name="My Profile" component={MyProfile} />
        <Drawer.Screen name="My Histrory" component={MyHistory} />
        <Drawer.Screen name="Account Handle" component={Info} />
        <Drawer.Screen name="Logout" component={logOut} />
      </Drawer.Navigator>
    )
}