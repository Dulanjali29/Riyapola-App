import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import MyButton from '../../common/Mybutton/MyButton';
import Footer from '../../common/Footer/Footer';

export default function MainPage({navigation}) {
    const getStart=()=>{
navigation.navigate('CarView')
    }
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/main.jpg')} style={styles.imageBackground}>
        <View style={styles.overlay}>
          <View style={styles.textContainer}>
            <Text style={styles.header}>Welcome to Riyapola</Text>
          </View>
          <View style={styles.buttonContainer}>
            <MyButton
              style={styles.button}
              text="Get Started"
              textColor="white"
              buttonColor="#673147"
              onPress={getStart}
            />
          </View>
        </View>
      </ImageBackground>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  textContainer: {
    marginTop: 250,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'white',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 40, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 300,
    marginBottom: 20, 
    borderRadius: 10,
    width:200 
  },
});
