import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { ALERT_TYPE, AlertNotificationRoot, Dialog,Toast } from 'react-native-alert-notification';
import { useState, useEffect } from 'react';
import InputText from '../../common/InputText/InputText';
import MyButton from '../../common/Mybutton/MyButton';
import instance from '../../service/AxiosOrder';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Info({navigation}) {
  const[username,setUserName]=useState("")
  const[password,setPassword]=useState("")

  const update=()=>{
    if (username && password  != null) {
      instance.put('/customer/customerUserNamePasswordUpdateById', {
        userName:username,
        password: password,
      

      })
        .then(function (response) {

          Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Success',
            textBody: 'update Succes!',
            button: 'close',
          })
          removeToken();

        })
        .catch(function (error) {
          Dialog.show({
            type: ALERT_TYPE.WARNING,
            title: 'Warning!',
            textBody: 'Update Failed!',
            button: 'close',
          })
          console.log(error);
        })
    } else {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Warning!',
        textBody: 'plese fill all data!',
        button: 'close',
      })
    }
  }
  
  removeToken = async () => {
    try {
      await AsyncStorage.removeItem('stmToken')
      const value = await AsyncStorage.getItem('stmtoken')
      if (value === null) {
        navigation.navigate('CarView');
  
      } else {
        console.log("Error Log Out");
      }
  
  
    } catch (e) {
      console.log(e);
    }
  
  }
  const clear=()=>{
setUserName("");
setPassword("");
  }
  const deleteAcc=()=>{
    instance.delete('/customer/deleteCustomerById')
    .then(response => {
     
      removeToken()
      navigation.navigate('Login');


    })
    .catch(error => {
      console.error(error);
    });
  }
  useEffect(() => {
    getCustomerById();
  }, [])
  const getCustomerById = () => {
  
    instance({
      method: 'get',
      url: '/customer/getCustomerDetails',
    })
      .then(function (response) {

        const userData = response.data;
        console.log(userData.userName);
        console.log(userData.password);
        setUserName(userData.userName);
        setPassword(userData.password);
       

      }).catch(error => {
        console.error(error)
      });
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>

    <View style={styles.overlay}>
      <Text style={styles.header}>Handle My Account</Text>
      <InputText
        style={styles.input}
        value={username}
        label={'User Name'}
        onChangeText={setUserName}
      />
      <InputText
        style={styles.input}
        value={password}
        type={'password'}
        label={'Password'}
        onChangeText={setPassword}
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
        <AlertNotificationRoot>
        <View style={styles.btnedit}>
          <MyButton
            style={styles.button}
            text="Update"
            textColor="white"
            buttonColor="#673147"
            onPress={update}
          />
        </View>
        </AlertNotificationRoot>
      </View>
      <View>
        <MyButton
          style={styles.button}
          text="Delete My Account"
          textColor="white"
          buttonColor="#673147"
          onPress={deleteAcc}
        />
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
    marginTop: 120,
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
    marginLeft: '20px'
  },
  btnedit: {
    width: '85%',
    marginLeft:30
    

  },
  text: {
    alignItems: 'center',


  }
});
