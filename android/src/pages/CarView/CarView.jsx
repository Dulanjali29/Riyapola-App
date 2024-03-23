import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import CarCard from '../../component/CarCard/CarCard';
import instance from '../../service/AxiosOrder';
import car from '../../assets/cars/car1.jpg';
import car2 from '../../assets/cars/car2.jpg';


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
            cars:car,
            brand: val.brand,
            model: val.model,
            passengers:val.noOfPassengers,
            dailyRentalPrice:val.dailyRentalPrice,
            status:val.status,

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
            cars={item.cars}
            brand={item.brand}
            model={item.model}
            passengers={item.passengers}
            dailyRentalPrice={item.dailyRentalPrice}
            status={item.status}


           
          />
        )}
       
      />
    </View>
  )
}
