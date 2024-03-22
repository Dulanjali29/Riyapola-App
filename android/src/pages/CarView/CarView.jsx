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
