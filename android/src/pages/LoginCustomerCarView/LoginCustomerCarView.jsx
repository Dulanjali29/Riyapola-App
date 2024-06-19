import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler';


import LoginCustomercard from "../../component/LoginCustomerCard/LoginCustomercard";
import instance from '../../service/AxiosOrder';


export default function LoginCustomerCarView({navigation}) {
  const [data, setData] = useState([])
  const [visible, setVisible] = useState(false)
 
  useEffect(() => {
    getAllCars();
  }, [])

  const getAllCars = () => {
  
    instance({
      method: 'get',
      url: '/car/getAllCar',
    })
      .then(function (response) {

        const array = [];
        response.data.forEach(val => {
          array.push({
            id:val.carId,
            images:val.carImgs[0].images,
            brand: val.brand,
            model: val.model,
            passengers: val.noOfPassengers,
            fueltype:val.fuelType,
            trMode:val.transmissionMode,
            dailyRentalPrice: val.dailyRentalPrice,
            status: val.status,

          });

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
          id={item.id}
          images={item.images}
          brand={item.brand}
          model={item.model}
          passengers={item.passengers}
          fueltype={item.fueltype}
          trMode={item.trMode}
          dailyRentalPrice={item.dailyRentalPrice}
          status={item.status}
          navigation={navigation}
         

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
  