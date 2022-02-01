import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const CalorieCard = () => {
  return (
    <View style={styles.card_container}>
      <Text style={styles.text}>Calories</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card_container: {
    margin: 10,
    padding: 10,
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 5,
  },
  text: {
    color: 'black',
    fontSize: 24,
  },
});

export default CalorieCard;
