import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification';
import InputText from '../../common/InputText/InputText';
import MyButton from '../../common/Mybutton/MyButton';
import { useState, useEffect } from 'react';
import instance from '../../service/AxiosOrder';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function MyProfile({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nic, setNic] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  const update = () => {
    if (firstName && lastName && nic && address && contact && email != null) {
      instance.put('/customer/customerUpdateById', {
        firstName: firstName,
        lastName: lastName,
        nic: nic,
        address: address,
        contact: contact,
        email: email,

      })
        .then(function (response) {

          Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Success',
            textBody: 'update Succes!',
            button: 'close',
          })


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
  useEffect(() => {
    getCustomerById();
  }, [])

  const getCustomerById = () => {
    console.log('dula');
    instance({
      method: 'get',
      url: '/customer/getCustomerDetails',
    })
      .then(function (response) {

        const userData = response.data;
        console.log(userData.firstName);
        setFirstName(userData.firstName);
        setLastName(userData.lastName);
        setNic(userData.nic);
        setAddress(userData.address);
        setContact(userData.contact);
        setEmail(userData.email);



      }).catch(error => {
        console.error(error)
      });
  }

  const deleteAcc = () => {
    instance.delete('/customer/deleteCustomerById')
      .then(response => {
        console.log(response);

        navigation.navigate('Login');


      })
      .catch(error => {
        console.error(error);
      });
  }
}

const clear = () => {
  setFirstName('');
  setLastName('');
  setNic('');
  setAddress('');
  setContact('');
  setEmail('');

}
return (
  <ScrollView contentContainerStyle={styles.container}>

    <View style={styles.overlay}>
      <Text style={styles.header}>My Profile</Text>
      <InputText
        style={styles.input}
        value={firstName}
        label={'First Name'}
        onChangeText={setFirstName}
      />
      <InputText
        style={styles.input}
        value={lastName}
        label={'Last Name'}
        onChangeText={setLastName}
      />
      <InputText
        style={styles.input}
        value={nic}
        label={'NIC'}
        onChangeText={setNic}
      />
      <InputText
        style={styles.input}
        value={address}
        label={'Address'}
        onChangeText={setAddress}
      />
      <InputText
        style={styles.input}
        value={contact}
        label={'Contact'}
        onChangeText={setContact}
      />
      <InputText
        style={styles.input}
        value={email}
        label={'E mail'}
        onChangeText={setEmail}
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
    width: '45%',
    marginLeft: '20px'
  },
  text: {
    alignItems: 'center',


  }
});
