import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import userContext from '../../contexts/userContexts/UserContext';

const screenSize = Dimensions.get('screen');

const HomeScreen = () => {
  const {currentUser} = useContext(userContext);
  const user = currentUser;

  if (user.avatar_url === 'no image') {
    user.avatar_url =
      'https://www.seekpng.com/png/detail/402-4022635_avatar-generic-person-icon.png';
  }

  return (
    <View style={styles.root}>
      <Text style={styles.text_primary}>Hi {user.name}</Text>

      <Image style={styles.image} source={{uri: user.avatar_url}} />

      <Text style={styles.text_secondary}>Weight: {user.weight}lbs</Text>

      <Text style={styles.text_secondary}>Height: {user.height}"</Text>

      <Text style={styles.text_secondary}>Age: {user.age} yeas old.</Text>

      <Text style={styles.text_secondary}>
        Maintenance calories: {user.maintenance}
      </Text>

      <Text style={styles.text_secondary}>Target calories: {user.target}</Text>

      {/* <Image /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  text_primary: {
    alignItems: 'center',
    padding: 20,
    fontSize: 24,
  },
  text_secondary: {
    alignItems: 'center',
    padding: 20,
    fontSize: 12,
  },
  image: {
    borderRadius: screenSize.width * 0.15,
    borderWidth: 1,
    borderColor: 0x000000ff,
    width: screenSize.width * 0.35,
    height: screenSize.width * 0.35,
  },
});

export default HomeScreen;
