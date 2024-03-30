import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import InputText from '../../common/InputText/InputText';
import MyButton from '../../common/Mybutton/MyButton';

export default function MyProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nic, setNic] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  const update = () => {

  }
  const clear = () => { }
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.overlay}>
        <Text style={styles.header}>Customer Registration</Text>
        <InputText
          style={styles.input}
          value={firstName}
          label={'First Name'}
          onChangeText={(val) => setFirstName(val)}
        />
        <InputText
          style={styles.input}
          value={lastName}
          label={'Last Name'}
          onChangeText={(val) => setLastName(val)}
        />
        <InputText
          style={styles.input}
          value={nic}
          label={'NIC'}
          onChangeText={(val) => setNic(val)}
        />
        <InputText
          style={styles.input}
          value={address}
          label={'Address'}
          onChangeText={(val) => setAddress(val)}
        />
        <InputText
          style={styles.input}
          value={contact}
          label={'Contact'}
          onChangeText={(val) => setContact(val)}
        />
        <InputText
          style={styles.input}
          value={email}
          label={'E mail'}
          onChangeText={(val) => setEmail(val)}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btnClear}>
            <MyButton
              style={styles.button}
              text="Clear"
              textColor="white"
              buttonColor="#673147"
              onPress={clear}
            />
          </View>
          <View style={styles.btnedit}>
          <MyButton
            style={styles.button}
            text="Update"
            textColor="white"
            buttonColor="#673147"
            onPress={update}
          />
          </View>
        </View>

      </View>



    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: 730,
  },
  overlay: {
 
    backgroundColor: '#979A9A',
    padding: 20,
    height: 800,
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 180,
    marginBottom: 80,
    color: 'white',

  },
  input: {
    marginBottom: 10,
  },
  button: {

    width: '100%',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',


  },
  btnClear: {
    width: '45%',
    marginLeft:'20px'
  },
  btnedit: {
    width: '45%',
    marginLeft:'20px'
  },
  text: {
    alignItems: 'center',


  }
});
