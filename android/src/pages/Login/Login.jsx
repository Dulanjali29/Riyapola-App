import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import InputText from '../../common/InputText/InputText';
import MyButton from '../../common/Mybutton/MyButton';
import Footer from '../../common/Footer/Footer';
import instance from '../../service/AxiosOrder';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ALERT_TYPE, Dialog ,AlertNotificationRoot} from 'react-native-alert-notification';

export default function Login({ navigation }) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const signUp = () => {
        navigation.navigate('Registration')
    }
    const signIn = () => {
       
        if(userName && password != null){
            instance.post('/customer/login', {
              
                userName: userName,
                password: password,
            })
                .then(function (response) {
                   
                    if(response.data.token !=null && response.data.cusId!=null){
                        storeData(response);
                    }
                 
    
                })
                .catch(function (error) {
                    console.log(error);
                    console.log("Login Failed!");
                });
        }else{

            Dialog.show({
            type: ALERT_TYPE.WARNING,
            title: 'Warning',
            textBody: 'Please valide Data!',
            button: 'close',
           
        })        
        }
        
    }
    const storeData = async (response) => {
        try {
            await AsyncStorage.setItem('stmToken', response.data.token);
            await AsyncStorage.setItem('cusId', response.data.cusId);
         const genToken= await AsyncStorage.getItem('stmToken');
                console.log("Token-"+genToken);
          const getCusId= await AsyncStorage.getItem('cusId');
                console.log("CusId-"+getCusId);    
            navigation.navigate('DrawerNav')
        } catch (e) {
            console.log(e,"faild");
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ImageBackground source={require('../../assets/loginback2.jpg')} style={styles.imageBackground}>
                <View style={styles.overlay}>
                    <Text style={styles.header}>Login</Text>


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
                        text="Sign In"
                        textColor="white"
                        buttonColor="#673147"
                        onPress={signIn}
                    />
                    </AlertNotificationRoot>
                </View>
                <View style={styles.text} >
                    <Text style={{ color: 'white' }} >Already have an account ? </Text>
                    <View>
                        <TouchableOpacity>
                            <Text

                                style={{ color: '#A95C68', marginTop: 10, marginBottom: 20, fontSize: 20 }}
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