import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Define a type for the component's props
type ProfileSectionProps = {
  avatar: string;
  name: string;
  steps: number;
  distance: number;
};

const ProfileSection: React.FC<ProfileSectionProps> = ({ avatar, name, steps, distance }) => {
  // Determine the source of the avatar based on the passed 'avatar' prop
  const avatarSource = avatar === 'Hobbit1' ? require('./assets/images/ProfileAvatars/Hobbit1.png')
                                             : require('./assets/images/ProfileAvatars/Hobbit2.png');

  return (
    <View style={styles.container}>
      <Image source={avatarSource} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.stats}>Steps: {steps}</Text>
        <Text style={styles.stats}>Distance: {distance} km</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#116530',
    padding: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  name: {
    fontSize: 24,
    color: '#f4d35e',
    fontFamily: 'Ringbearer',
  },
  stats: {
    fontSize: 16,
    color: '#d0e8d0',
    fontFamily: 'Ringbearer',
  },
});

export default ProfileSection;
