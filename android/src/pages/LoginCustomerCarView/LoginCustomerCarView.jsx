import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import car1 from '../../assets/cars/car1.jpg';

import LoginCustomercard from "../../component/LoginCustomerCard/LoginCustomercard";
import instance from '../../service/AxiosOrder';


export default function LoginCustomerCarView({navigation}) {
  const [data, setData] = useState([])
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    getAllCars();
  }, [])

  const getAllCars = () => {
    console.log('dulanji');
    instance({
      method: 'get',
      url: '/customer/registerdCustomer/getAllCars',
    })
      .then(function (response) {

        const array = [];
        response.data.forEach(val => {
          array.push({
            cars: car1,
            brand: val.brand,
            model: val.model,
            passengers: val.noOfPassengers,
            fueltype:val.fuelType,
            trMode:val.transmissionMode,
            dailyRentalPrice: val.dailyRentalPrice,
            status: val.status,

          })

        });

        setData(array);

      }).catch(error => {
        console.error(error);

      });


  }  
  return (
    <ScrollView contentContainerStyle={styles.container}>
    
    <View>
    <Text style={styles.title}>Choose Your Vehicle</Text>
    </View>
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <LoginCustomercard
          cars={item.car1}
          brand={item.brand}
          model={item.model}
          passengers={item.passengers}
          fueltype={item.fueltype}
          trMode={item.trMode}
          dailyRentalPrice={item.dailyRentalPrice}
          status={item.status}
         

        />
      )}

    />
    

  </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  });
  