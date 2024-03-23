import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import MyButton from '../../common/Mybutton/MyButton';
import { ScrollView } from 'react-native-gesture-handler';

export default function CarCard({ cars, brand, model, passengers, dailyRentalPrice, status }) {
  const bookingNow = () => {};

  return (
    <ScrollView>
      <Card style={styles.card}>
        <Card.Content>
          <Image  style={styles.image} source={cars} />
          <View style={styles.cardContent}>
            <Text style={styles.title}>{brand} {model}</Text>
            <View style={styles.detailsContainer}>
              <Text style={styles.detailText}>{passengers} Seater</Text>
              <Text style={styles.detailText}>LKR.{dailyRentalPrice}/day</Text>
              <Text style={styles.detailText}>{status}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <MyButton
                mode={'contained'}
                text={'Book Now'}
                buttonColor={'#673147'}
                textColor={'white'}
                onPress={bookingNow}
                style={styles.button}
              />
            </View>
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    backgroundColor: '#fff',
  },
  cardContent: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  buttonContainer: {
    marginTop: 10,
    
  },
  button: {
    borderRadius: 10,
  },
});
