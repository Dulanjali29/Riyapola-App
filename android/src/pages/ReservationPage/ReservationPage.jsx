import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import React, { useState,useEffect } from 'react';
import InputText from '../../common/InputText/InputText';
import MyButton from '../../common/Mybutton/MyButton';
import Footer from '../../common/Footer/Footer';
import { ALERT_TYPE, Dialog, AlertNotificationRoot } from 'react-native-alert-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';
import instance from '../../service/AxiosOrder';

export default function ReservationPage({route,navigation}) {

    const { carId } = route.params;

  const [cusId, setCusId] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [pickUpLocation, setPickUpLocation] = useState("");
  const[status,setStatus]=useState("Weiting")

    useEffect(() => {
    if (route.params == null) {
      console.log("working!")

    }
    else {
      const  cusId  = route.params; // Access passed car object
      setCusId(cusId);
    }

  }, [route.params]);

  const bookThisCar = async() => {
    // console.log('Car ID:', carId);
    const storedCusId = await AsyncStorage.getItem('cusId');
    console.log('Customer ID:', cusId);
        instance.post('/reservation/addReservation',{
            startDate: startDate,
            startTime: startTime,
            endDate: endDate,
            endTime: endTime,
            picUpLocation: pickUpLocation,
            carId: carId,
            customer_id: storedCusId,
            status: status
        })
        .then((response)=>{
           
            console.log(response.data);
            Dialog.show({
              type:ALERT_TYPE.SUCCESS,
              title:'Success',
              textBody:'Reservation Succes!',
              button:'close',
           })
           navigation.navigate('CustomerPersonalDetails');
          
        })
        .catch((error)=>{
            console.log("Error saving Reservation", error);
        
        });
    }

  return (
    
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.overlay}>
          <Text style={styles.header}>Booking Details</Text>
          <InputText
            style={styles.input}
            value={startDate}
            label={'Start Date'}
            onChangeText={(val) => setStartDate(val)}
          />
          <InputText
            style={styles.input}
            value={startTime}
            label={'Start Time'}
            onChangeText={(val) => setStartTime(val)}
          />
          <InputText
            style={styles.input}
            value={endDate}
            label={'End Date'}
            onChangeText={(val) => setEndDate(val)}
          />
          <InputText
            style={styles.input}
            value={endTime}
            label={'End Time'}
            onChangeText={(val) => setEndTime(val)}
          />
          <InputText
            style={styles.input}
            value={pickUpLocation}
            label={'Pick Up Location'}
            onChangeText={(val) => setPickUpLocation(val)}
          />
          <AlertNotificationRoot>
            <MyButton
              style={styles.button}
              text="Reservation"
              textColor="white"
              buttonColor="#673147"
              onPress={bookThisCar}
            />
          </AlertNotificationRoot>
        </View>
        <Footer />
      </ScrollView>
   
  );
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
