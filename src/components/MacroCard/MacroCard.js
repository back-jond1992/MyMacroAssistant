import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const MacroCard = ({text, data}) => {
  return (
    <View style={styles.card_container}>
      <View style={styles.card_content}>
        <View>
          <Text style={styles.data}>{data}</Text>
        </View>
        <View>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card_container: {
    borderRadius: 6,
    elevation: 3,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    height: 150,
    width: 170,
  },
  card_content: {
    marginHorizontal: 18,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
