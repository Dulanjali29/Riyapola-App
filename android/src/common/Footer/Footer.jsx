import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

import location_img from '../../assets/img/location.png';
import email_img from '../../assets/img/email.png';
import call_img from '../../assets/img/call.png';

export default function Footer() {
    return (
        <View style={styles.container}>
            <View style={styles.contactContainer}>
                <View style={styles.contactItem}>
                    <Image source={location_img} style={styles.image} />
                    <View style={styles.contactText}>
                        <Text style={styles.contactLabel}>Location</Text>
                        <Text>Kurunegala</Text>
                    </View>
                </View>

                <View style={styles.contactItem}>
                    <Image source={email_img} style={styles.image} />
                    <View style={styles.contactText}>
                        <Text style={styles.contactLabel}>E-Mail</Text>
                        <Text>riyapola@gmail.com</Text>
                    </View>
                </View>
                <View style={styles.contactItem}>
                    <Image source={call_img} style={styles.image} />
                    <View style={styles.contactText}>
                        <Text style={styles.contactLabel}>Contact</Text>
                        <Text>037-2258236</Text>
                    </View>
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Copyright © 2024 | Design by Dulanjali Ariyarathna | All Rights Reserved
                </Text>
                <Text style={{ fontWeight: 'bold', color: 'white' ,fontSize:12}}>Dulanjali Ariyarathna</Text>
                <Text style={{ fontWeight: 'bold', color: 'white' ,fontSize:12}}>dulanjiariyarathna@gmail.com</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       
      height:120
    },
    contactContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap:10,
       padding:15,
        backgroundColor: '#707B7C'

    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    contactText: {
        marginLeft: 10,
    },
    contactLabel: {
        fontWeight: 'bold',
    },
    footer: {

        Width: '100%',
        backgroundColor: 'black',
        padding: 5,
        alignItems: 'center',
    },
    footerText: {
        fontWeight: 'bold',
        fontSize: 12,
        color: 'white',

    },
    image: {
        width: 20,
        height: 20,
    },

});
