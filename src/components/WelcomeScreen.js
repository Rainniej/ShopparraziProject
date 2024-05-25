import React, { useRef } from 'react';
import { View, StatusBar, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* StatusBar */}
      <StatusBar barStyle="light-content" />

      {/* Image */}
      <Image 
        source={require('../../assets/grocery.png')} // Adjust path to image
        style={styles.image}
      />

      {/* Text */}
      <Text style={styles.text}>{'\n'}Welcome to Grocery Shopping </Text>
      <Text style={styles.description}>
        Unlock Unbeatable Grocery Deals
        Price Compare with Ease!
      </Text>

      {/* Button */}
      <TouchableOpacity style={styles.button}
      onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>

    
  );
};
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff006b',
    justifyContent: 'top',
    alignItems: 'center',
  },
  image: {
    width: wp(160), // Adjust width using responsive screen
    height: hp(67), // Adjust height using responsive screen
    resizeMode: 'contain',
    marginBottom: 10,
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default WelcomeScreen;
