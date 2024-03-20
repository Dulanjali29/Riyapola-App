
import React from 'react'
import { TextInput } from 'react-native-paper';

export default function InputText({label,value,onChange,secureTextEntry,style}) {
  return (
    <TextInput
    mode='outlined'
 
     label={label}
     value={value}
     onChange={onChange}
     secureTextEntry={secureTextEntry}
     style={style}
     outlineColor='#873600'
     activeOutlineColor='#873600'
  
   />
  )
}