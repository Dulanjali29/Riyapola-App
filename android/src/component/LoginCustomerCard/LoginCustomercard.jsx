import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginCustomercard({id, images, brand, model, passengers, fueltype, trMode, dailyRentalPrice,status, navigation }) {
    const[selectedCar,setSelectedCar]=useState("")
      
    const addToCart=async()=>{

        const customerId = await AsyncStorage.getItem('cusId');
        navigation.navigate('ReservationPage',{carId:id,customerId:customerId});
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
        <Card style={styles.card}>
            <Card.Cover  source={{uri:`http://192.168.8.130:8080/${images}`}} style={styles.image} />
            <Card.Content>
                <Text style={styles.title}>{brand} {model}</Text>
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailText}>{passengers} Seater</Text>
                    <Text style={styles.detailText}>{fueltype}</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.detailText}>{trMode}</Text>
                    <Text style={styles.detailText}>LKR.{dailyRentalPrice}/day</Text>
                    <Text style={styles.detailText}>{status}</Text>
                </View>
                <Button
                    mode="contained"
                    onPress={addToCart}
                    style={styles.button}
                    labelStyle={styles.buttonLabel}
                >
                    Add to Cart
                </Button>
            </Card.Content>
        </Card>
    </ScrollView>
    )
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
