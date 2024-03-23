
import React from 'react'
import { TextInput } from 'react-native-paper';

export default function InputText({label,value,onChangeText,secureTextEntry,style}) {
  return (
    <TextInput
    mode='outlined'
 
     label={label}
     value={value}
     onChangeText={onChangeText}
     secureTextEntry={secureTextEntry}
     style={style}
     outlineColor='white'
     activeOutlineColor='#873600'
  
   />
  )
}