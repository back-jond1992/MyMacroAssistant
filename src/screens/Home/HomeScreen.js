import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import userContext from '../../contexts/userContexts/UserContext';

const HomeScreen = () => {
  const {currentUser} = useContext(userContext);
  const user = currentUser;

  if (user.avatar_url === 'no image') {
    user.avatar_url =
      'https://www.seekpng.com/png/detail/402-4022635_avatar-generic-person-icon.png';
  }

  return (
    <View style={styles.root}>
      <Text style={styles.text}>Hi {user.name}</Text>

      <Image />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  text: {
    alignItems: 'center',
    padding: 20,
    fontSize: 24,
  },
});

export default HomeScreen;
