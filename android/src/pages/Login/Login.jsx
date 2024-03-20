import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import InputText from '../../common/InputText/InputText';
import MyButton from '../../common/Mybutton/MyButton';
import Footer from '../../common/Footer/Footer';

export default function Login({navigation}) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    
    const signUp = () => {
      navigation.navigate('Registration') 
    }
    const signIn = () => {
     
    }
    
  return (
    <ScrollView contentContainerStyle={styles.container}>
            <ImageBackground source={require('../../assets/login2.jpg')} style={styles.imageBackground}>
                <View style={styles.overlay}>
                    <Text style={styles.header}>Login</Text>
                    
                   
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
                        text="Sign In"
                        textColor="white"
                        buttonColor="#5B2C6F"
                        onPress={signIn}
                    />
                </View>
                <View style={styles.text} >
                    <Text style={{color:'white'}} >Already have an account ? </Text>
                    <View>
                        <TouchableOpacity>
                            <Text
                               
                                style={{ color: '#AF7AC5', marginTop: 10 ,marginBottom:20,fontSize:20}}
                                onPress={signUp} > Sign Up</Text>
                        </TouchableOpacity>


                    </View>


                </View>
            </ImageBackground>
            <View>
                <Footer />
            </View>
        </ScrollView>
  )
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
        height: 680,
    },
    overlay: {
        marginTop: 350,
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
        marginTop: 10,
        marginBottom: 0,
    },
    text: {
        alignItems: 'center',
      

    }
});