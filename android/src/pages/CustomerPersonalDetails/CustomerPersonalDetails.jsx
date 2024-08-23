import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import InputText from '../../common/InputText/InputText';
import MyButton from '../../common/Mybutton/MyButton';
import Footer from '../../common/Footer/Footer';
import { ALERT_TYPE, Dialog, AlertNotificationRoot } from 'react-native-alert-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';
import instance from '../../service/AxiosOrder';

export default function CustomerPersonalDetails({navigation}) {

    const [nic,setNic]=useState("");
    const [address,setAddress]=useState("");
    const [email,setEmail]=useState("");
    const [contact,setContact]=useState("");

   
    const save = async () => {
        try {
            const storedCusId = await AsyncStorage.getItem('cusId');
            console.log('Customer ID:', storedCusId);

            const response = await instance.put(`/customer/customerUpdateById/${storedCusId}`, {
                customer_id:storedCusId,
                nic: nic,
                address: address,
                email: email,
                contact: contact
            });
   
            console.log(response.data);
            Dialog.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Success',
                textBody: 'Customer details updated successfully!',
                button:'close',
            });
            navigation.navigate('DrawerNav');
        } catch (error) {
            console.error("Error saving customer details", error);
            Dialog.show({
                type: ALERT_TYPE.DANGER,
                title: 'Error',
                textBody: 'Failed to update customer details.',
            });
        }
    }


  return (
    
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.overlay}>
          <Text style={styles.header}>Customer Details</Text>
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
            value={email}
            label={'Email'}
            onChangeText={(val) => setEmail(val)}
          />
          <InputText
            style={styles.input}
            value={contact}
            label={'Contact No'}
            onChangeText={(val) => setContact(val)}
          />
        
          <AlertNotificationRoot>
            <MyButton
              style={styles.button}
              text="Continue"
              textColor="white"
              buttonColor="#673147"
              onPress={save}
            />
          </AlertNotificationRoot>
        </View>
        <Footer />
      </ScrollView>
  )
}
const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    container: {
      flexGrow: 1,
      justifyContent: 'space-between',
    },
    overlay: {
      marginTop: 80,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      padding: 20,
      borderRadius: 10,
      marginHorizontal: 10,
    },
    header: {
      fontSize: 30,
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: 20,
      color: 'white',
    },
    input: {
      marginBottom: 15,
    },
    button: {
      borderRadius: 10,
      paddingVertical: 2,
      marginTop: 20,
    },
    footerContainer: {
      marginTop: 20,
    },
  });