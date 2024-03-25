import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import MyButton from '../../common/Mybutton/MyButton';
import Footer from '../../common/Footer/Footer';

export default function MainPage({ navigation }) {
  const getStart = () => {
    navigation.navigate('CarView');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/main.jpg')} style={styles.imageBackground}>
        <View style={styles.overlay}>
          <Text style={styles.header}>Express The Road Ahead with</Text>
          <Text style={[styles.header, styles.headerBold]}>Riyapola</Text>
          <MyButton
            style={styles.button}
            text="Get Started"
            textColor="white"
            buttonColor="#673147"
            onPress={getStart}
          />
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
  header: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  headerBold: {
    fontWeight: 'bold',
  },
  button: {
    marginTop: 400,
    width: 200,
    borderRadius: 10,
  },
});
