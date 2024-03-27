import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';


export default function CarCard({ cars, brand, model, passengers, dailyRentalPrice, status,navigation }) {

  const bookingNow = () => {
    navigation.navigate('Login');
    
  }

  return (
    <ScrollView>
      <Card style={styles.card}>
        <Card.Cover source={cars} style={styles.image} />
        <Card.Content>
          <Text style={styles.title}>{brand} {model}</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailText}>{passengers} Seater</Text>
            <Text style={styles.detailText}>LKR.{dailyRentalPrice}/day</Text>
            <Text style={styles.detailText}>{status}</Text>
          </View>
          <Button
            mode="contained"
            onPress={bookingNow}
            style={styles.button}
            labelStyle={styles.buttonLabel}
          >
            Book Now
          </Button>
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
    backgroundColor: '#fff',
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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  button: {
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#673147',
  },
  buttonLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
