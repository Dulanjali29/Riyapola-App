
import React from 'react'
import { TextInput } from 'react-native-paper';

export default function InputText({lable,value,onChangeText,secureTextEntry,style}) {
  return (
    <TextInput
    mode='outlined'
     label={lable}
     value={value}
     onChangeText={onChangeText}
     secureTextEntry={secureTextEntry}
     style={style}
     
  
   />
  )
}