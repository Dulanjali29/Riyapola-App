import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import InputText from '../../common/InputText/InputText';
import MyButton from '../../common/Mybutton/MyButton';
import Footer from '../../common/Footer/Footer';

export default function Registration({navigation}) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const signUp = () => {
     
    const signin = () => {
       navigation.navigate('Login')
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImageBackground source={require('../../assets/registerBack.jpg')} style={styles.imageBackground}>
                <View style={styles.overlay}>
                    <Text style={styles.header}>Customer Registration</Text>
                    <InputText
                        style={styles.input}
                        value={firstName}
                        label={'First Name'}
                        onChange={(val) => setFirstName(val)}
                    />
                    <InputText
                        style={styles.input}
                        value={lastName}
                        label={'Last Name'}
                        onChange={(val) => setLastName(val)}
                    />
                    <InputText
                        style={styles.input}
                        value={userName}
                        label={'User Name'}
                        onChange={(val) => setUserName(val)}
                    />
                    <InputText
                        style={styles.input}
                        value={password}
                        label={'Password'}
                        onChange={(val) => setPassword(val)}
                        secureTextEntry
                    />
                    <MyButton
                        style={styles.button}
                        text="Sign Up"
                        textColor="white"
                        buttonColor="#873600"
                        onPress={signUp}
                    />
                </View>
                <View style={styles.text} >
                    <Text style={{color:'white'}} >Already have an account ? </Text>
                    <View>
                        <TouchableOpacity>
                            <Text
                               
                                style={{ color: '#E59866', marginTop: 10 ,marginBottom:20,fontSize:20}}
                                onPress={signin} > Sign In</Text>
                        </TouchableOpacity>


                    </View>


                </View>
            </ImageBackground>
            <View>
                <Footer />
            </View>
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
        height: 675,
    },
    overlay: {
        marginTop: 180,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 20,
    },
    header: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 30,
        color: 'white',

    },
    input: {
        marginBottom: 10,
    },
    button: {
        marginTop: 20,
        marginBottom: 20,
    },
    text: {
        alignItems: 'center',
      

    }
});
