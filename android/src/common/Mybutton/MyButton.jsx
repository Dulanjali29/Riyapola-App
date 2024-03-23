import { View, Text } from 'react-native'
import { Button } from 'react-native-paper';
import React from 'react'

export default function MyButton({buttonColor,onPress,text,style,textColor,mode}) {
  return (
    <View>
      <Button 
      variant="contained"
      mode={mode}
      
      buttonColor={buttonColor}
      textColor={textColor}
      onPress={onPress}
      style={style}
      >
      {text}
        
  </Button>
  </View> 
  )
}