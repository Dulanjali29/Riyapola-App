import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import InputText from '../../common/InputText/InputText';
import MyButton from '../../common/Mybutton/MyButton';
import Footer from '../../common/Footer/Footer';
import instance from'../../service/AxiosOrder';
import { ALERT_TYPE, Dialog,AlertNotificationRoot } from 'react-native-alert-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Registration({navigation}) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const signUp = () => {
        if(firstName && lastName && userName && password !=null){
            instance.post('/customer/customerRegister', {
                firstName: firstName,
                lastName: lastName,
                userName:userName,
                 password: password,
     
             })
                 .then(async function (response) {
                    const customerId = response.data.id;  // Assuming response contains the customer ID
                    // await AsyncStorage.setItem('customer_id', customerId);
                     console.log(response.data);
                     
                     Dialog.show({
                        type:ALERT_TYPE.SUCCESS,
                        title:'Success',
                        textBody:'Registration Succes!',
                        button:'close',
                     })
                     navigation.navigate('Login');
                    
                 })
                 .catch(function (error) {
     
                     console.log(error);
                 })
        }else{
            Dialog.show({
                type:ALERT_TYPE.WARNING,
                title:'Warning!',
                textBody:'Registration Failed!',
                button:'close',
             })   
        }
      
     }
    const signin = () => {
       navigation.navigate('Login')
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImageBackground source={require('../../assets/reg.jpg')} style={styles.imageBackground}>
                <View style={styles.overlay}>
                    <Text style={styles.header}>Customer Registration</Text>
                    <InputText
                        style={styles.input}
                        value={firstName}
                        label={'First Name'}
                        onChangeText={(val) => setFirstName(val)}
                    />
                    <InputText
                        style={styles.input}
                        value={lastName}
                        label={'Last Name'}
                        onChangeText={(val) => setLastName(val)}
                    />
                    <InputText
                        style={styles.input}
                        value={userName}
                        label={'User Name'}
                        onChangeText={(val) => setUserName(val)}
                    />
                    <InputText
                        style={styles.input}
                        value={password}
                        label={'Password'}
                        onChangeText={(val) => setPassword(val)}
                        secureTextEntry
                    />
                    <AlertNotificationRoot>
                    <MyButton
                        style={styles.button}
                        text="Sign Up"
                        textColor="white"
                        buttonColor="#673147"
                        onPress={signUp}
                    />
                    </AlertNotificationRoot>
                </View>
                <View style={styles.text} >
                    <Text style={{color:'white'}} >Already have an account ? </Text>
                    <View>
                        <TouchableOpacity>
                            <Text
                               
                                style={{ color: '#A95C68', marginTop: 10 ,marginBottom:20,fontSize:20}}
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
      
    },
    overlay: {
        marginTop: 220,
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
        width:'80px',
        marginTop: 10,
        marginBottom: 20,
        borderRadius:10,
    },
    text: {
        alignItems: 'center',
      

    }
});
