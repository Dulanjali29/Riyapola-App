import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import InputText from '../../common/InputText/InputText';
import MyButton from '../../common/Mybutton/MyButton';

export default function Registration() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const signUp = () => {
        // Implement your sign-up logic here
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImageBackground source={require('../../assets/homeBack.jpg')} style={styles.imageBackground}>
                <View style={styles.overlay}>
                    <Text style={styles.header}>Customer Registration</Text>
                    <InputText
                        style={styles.input}
                        value={firstName}
                        label="First Name"
                        onChangeText={(val) => setFirstName(val)}
                    />
                    <InputText
                        style={styles.input}
                        value={lastName}
                        label="Last Name"
                        onChangeText={(val) => setLastName(val)}
                    />
                    <InputText
                        style={styles.input}
                        value={userName}
                        label="User Name"
                        onChangeText={(val) => setUserName(val)}
                    />
                    <InputText
                        style={styles.input}
                        value={password}
                        label="Password"
                        onChangeText={(val) => setPassword(val)}
                        secureTextEntry
                    />
                    <MyButton
                        style={styles.button}
                        text="Sign Up"
                        textColor="white"
                        buttonColor="#281C65"
                        onPress={signUp}
                    />
                </View>
            </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%',
        height: 700,
    },
    overlay: {
        
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 20,
    },
    header: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white',
       
    },
    input: {
        marginBottom: 10,
    },
    button: {
        marginTop: 20,
        marginBottom: 20,
    },
});
