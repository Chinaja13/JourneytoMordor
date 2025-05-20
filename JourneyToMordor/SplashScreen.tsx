import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the type for the navigation prop
type SplashScreenNavigationProp = StackNavigationProp<any, 'Splash'>;

// Define the type for the component's props
type SplashScreenProps = {
  navigation: SplashScreenNavigationProp;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  const isProfileSetup = false; // Placeholder for checking if the profile is set up

  return (
    <ImageBackground 
      source={require('./assets/images/AppImages/WalkToMordorStart.png')} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Walk to Mordor</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate(isProfileSetup ? 'Main' : 'ProfileSetup')}
        >
          <Text style={styles.buttonText}>
            {isProfileSetup ? 'Continue Journey' : 'Begin Journey'}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#f4d35e',
    marginBottom: 20,
    fontFamily: 'Ringbearer', // Updated font family
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  button: {
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f4d35e',
    borderRadius: 20,
  },
  buttonText: {
    color: '#1e3d59',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
