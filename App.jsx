

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Registration from './android/src/pages/Registration/Registration';
import Login from './android/src/pages/Login/Login';
import DrawerNav from './android/src/component/drawerNav/DrawerNav';
import MainPage from './android/src/pages/MainPage/MainPage';
import { NavigationContainer } from '@react-navigation/native';
import CarCard from './android/src/component/CarCard/CarCard';
import CarView from './android/src/pages/CarView/CarView';
import Info from './android/src/pages/Info/Info';
import { PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="HandleAccount" component={Info} options={{headerShown:false}} />
      <Stack.Screen name="MainPage" component={MainPage} options={{headerShown:false}} />
      <Stack.Screen name="CarView" component={CarView} options={{headerShown:false}} />
      <Stack.Screen name="CarCard" component={CarCard} />
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="DrawerNav" component={DrawerNav} options={{headerShown:false}} />
       
        <Stack.Screen name="Registration" component={Registration} options={{headerShown:false}} />
     
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  )
}