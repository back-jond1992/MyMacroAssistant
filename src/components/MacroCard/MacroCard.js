import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const MacroCard = ({text, data}) => {
  return (
    <View style={styles.card_container}>
      <View>
        <Text style={styles.data}>{data}</Text>
      </View>
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
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
  data: {
    color: '#01dee6',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default MacroCard;
