import * as React from 'react';
import { View,Image, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';


export default function CarCard(img,) {
  return (
    <Card>
    <Card.Content>
    <View>
        <Image source={img} />
    </View>
    <View>
        <Text></Text>
    </View>
    </Card.Content>
    
  </Card>
  )
}
const styles=StyleSheet.create({
    image:{
        width:'100%',
        height:200,
    }
})