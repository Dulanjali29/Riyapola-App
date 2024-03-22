import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';


export default function CarCard() {
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
            <Text>{noOf}</Text>
          </View>
        </View>
      </Card.Content>

    </Card>
  )
}
const styles = StyleSheet.create({

})