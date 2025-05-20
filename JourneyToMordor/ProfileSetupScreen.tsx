import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Video from 'react-native-video';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the type for the navigation prop
type ProfileSetupScreenNavigationProp = StackNavigationProp<any, 'ProfileSetup'>;

// Define the type for the component's props
type ProfileSetupScreenProps = {
  navigation: ProfileSetupScreenNavigationProp;
};

// Define the type for the avatar keys
type AvatarKey = 'Hobbit1' | 'Hobbit2';

const ProfileSetupScreen: React.FC<ProfileSetupScreenProps> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState<AvatarKey | null>(null);

  const avatars: Record<AvatarKey, any> = {
    Hobbit1: require('./assets/images/ProfileAvatars/Hobbit1.png'),
    Hobbit2: require('./assets/images/ProfileAvatars/Hobbit2.png'),
  };

  const animatedAvatars: Record<AvatarKey, any> = {
    Hobbit1: require('./assets/images/ProfileAvatars/Hobbit1Animated.mp4'),
    Hobbit2: require('./assets/images/ProfileAvatars/Hobbit2Animated.mp4'),
  };

  const handleAvatarSelect = (avatar: AvatarKey) => {
    setSelectedAvatar(avatar);
  };

  const handleSaveProfile = () => {
    navigation.navigate('Main');
  };

  const getAvatarSource = (): any => {
    if (selectedAvatar !== null && animatedAvatars.hasOwnProperty(selectedAvatar as AvatarKey)) {
      return animatedAvatars[selectedAvatar as AvatarKey]; 
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Setup</Text>
      {selectedAvatar && (
        <Video
          source={getAvatarSource()}
          style={styles.avatarAnimation}
          resizeMode="cover"
          repeat
          muted={true}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <View style={styles.avatarContainer}>
        {Object.keys(avatars).map((avatarKey) => (
          <TouchableOpacity 
            key={avatarKey}
            onPress={() => handleAvatarSelect(avatarKey as AvatarKey)}
          >
            <Image source={avatars[avatarKey as AvatarKey]} style={[styles.avatar, selectedAvatar === avatarKey && styles.selectedAvatar]} />
          </TouchableOpacity> 
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSaveProfile}>
        <Text style={styles.buttonText}>Save Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    padding: 10,
    marginBottom: 20,
  },
  avatarContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginHorizontal: 10,
  },
  selectedAvatar: {
    borderWidth: 2,
    borderColor: '#f4d35e',
  },
  button: {
    backgroundColor: '#1e3d59',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  avatarAnimation: {
    width: 150,
    height: 150,
    marginVertical: 20,
  },
});

export default ProfileSetupScreen;
