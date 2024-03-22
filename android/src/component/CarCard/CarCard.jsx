import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import MyButton from '../../common/Mybutton/MyButton';


export default function CarCard({brand,model,passngers,dailyRentalPrice,status}) {
  return (
    <Card>
      <Card.Content>
        <View>
          {/* <Image source={}/>   */}
        </View>
        <View>
          <View>
            <Text>{brand}{model}</Text>
          </View>
          <View>
            <View>
            <Text>{passngers} </Text>
            <Text>Seater</Text>
            </View>
            <View>
            <Text>LKR.{dailyRentalPrice}/day</Text>
          </View>
          <View>
            <Text>{status}</Text>
          </View>
          </View>
          
         

        </View>
        <View>
          <MyButton
          text={'Booking Now'}
          />
        </View>
      </Card.Content>

    </Card>
  )
}
const styles = StyleSheet.create({

})