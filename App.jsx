import 'react-native-gesture-handler';

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Registration from './android/src/pages/Registration/Registration';
import Login from './android/src/pages/Login/Login';
import DrawerNav from './android/src/component/drawerNav/DrawerNav';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
 <Stack.Navigator>
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="DrawerNav" component={DrawerNav} />
     
    </Stack.Navigator>
    </NavigationContainer>

  )
}