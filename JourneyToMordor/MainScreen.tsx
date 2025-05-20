import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native'; // Import Text component
import ProfileSection from './ProfileSection'; // Ensure this path is correct

const TopBar = () => {
    return (
        <View style={styles.topBar}>
            <Text style={styles.title}>Walk to Mordor</Text>
        </View>
    );
};
  
const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <ProfileSection
        avatar="Hobbit1" // Default avatar, this can be dynamic based on user choice
        name="Frodo Baggins" // Default name, this can be dynamic based on user input
        steps={5000}
        distance={7.5}
      />
      {/* Other components for your main screen go here */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    height: 60,
    backgroundColor: '#1e3d59', // Deep green-blue color
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f4d35e', // Gold color for the title
    fontFamily: 'Ringbearer', // Assuming you have linked this custom font correctly
  },
  // Add any additional styles you need for MainScreen
});

export default MainScreen;
