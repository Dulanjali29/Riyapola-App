

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Registration from './android/src/pages/Registration/Registration';
import Login from './android/src/pages/Login/Login';
import DrawerNav from './android/src/component/drawerNav/DrawerNav';
import { NavigationContainer } from '@react-navigation/native';
import CarCard from './android/src/component/CarCard/CarCard';
import { PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator>
     
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="DrawerNav" component={DrawerNav} options={{headerShown:false}} />
        <Stack.Screen name="CarCard" component={CarCard} />
        <Stack.Screen name="Registration" component={Registration} />
     
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  )
}