import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const MacroCard = ({text}) => {
  return (
    <View style={styles.card_container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card_container: {
    margin: 25,
    padding: 25,
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 5,
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'black',
    fontSize: 24,
  },
});

export default MacroCard;
