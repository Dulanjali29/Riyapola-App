import { View, Text } from 'react-native'
import React from 'react'
import Registration from './android/src/pages/Registration/Registration'
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
     <View>
      <Registration/>
    </View>
  </PaperProvider>
   
  )
}