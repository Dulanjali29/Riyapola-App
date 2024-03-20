import { View, Text } from 'react-native'
import React from 'react'
import InputText from '../../common/InputText/InputText'

export default function Login() {
  return (
    <View>
    <InputText
    //  style={styles.input}
    //  value={firstName}
     label={"First Name"}
    //  onChange={(val) => setFirstName(val)}
    />
    </View>
  )
}