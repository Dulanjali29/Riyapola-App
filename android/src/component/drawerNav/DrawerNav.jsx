
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import CarView from '../../pages/CarView/CarView';
import MyProfile from '../../pages/MyProfile/MyProfile';
const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
        <Drawer.Navigator>
        <Drawer.Screen name="Home" component={CarView} />
        <Drawer.Screen name="My Profile" component={MyProfile} />
      </Drawer.Navigator>
    )
}