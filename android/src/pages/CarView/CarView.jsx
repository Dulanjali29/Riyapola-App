import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import CarCard from '../../component/CarCard/CarCard';

export default function CarView() {
  const [data, setData] = useState([])
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

            brand: val.brand,
            model: val.model,


          })

        });

        setData(array);

      }).catch(error => {
        console.error(error);

      });
  }
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CarCard
           
            brand={item.brand}
            model={item.model}
           
          />
        )}
       
      />
    </View>
  )
}
