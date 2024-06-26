import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler';

import CarCard from '../../component/CarCard/CarCard';
import instance from '../../service/AxiosOrder';



export default function CarView({navigation}) {
  const [data, setData] = useState([])
  const [visible, setVisible] = useState(false)
  const[selectedCar,setSelectedCar]=useState()
  
  useEffect(() => {
    getAllCars();
  }, [])

  const getAllCars = () => {
    console.log('dula');
    instance({
      method: 'get',
      url: '/car/getAllCar',
    })
      .then(function (response) {

        const array = [];
        response.data.forEach(val => {

          array.push({
            id:val.carId,
            brand: val.brand,
            model: val.model,
            passengers: val.noOfPassengers,
            dailyRentalPrice: val.dailyRentalPrice,
            status: val.status,
            images:val.carImgs[0].images,

          })

        });

        setData(array);

      }).catch(error => {
        console.error(error);

      });


  }
  const closeDialog = () => {
    setVisible(false)
  }
  const openDialog = () => {

    setVisible(true)

  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
    
      <View>
      <Text style={styles.title}>Choose Your Vehicle</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CarCard
            id={item.id}
            images={item.images}
            brand={item.brand}
            model={item.model}
            passengers={item.passengers}
            dailyRentalPrice={item.dailyRentalPrice}
            status={item.status}
            navigation={navigation}

          />
        )}

      />
      

 
    </ScrollView>
  )
}
const styles=StyleSheet.create({
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
})
