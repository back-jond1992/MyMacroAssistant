import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import userContext from '../../contexts/userContexts/UserContext';

const HomeScreen = () => {
  const {currentUser} = useContext(userContext);

  console.log('homepage', currentUser);

  return (
    <View style={styles.root}>
      <Text style={styles.text}>Home Page</Text>
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
