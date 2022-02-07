import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const FoodCard = ({name, calories, protein, carbs, fat}) => {
  return (
    <View style={styles.card_container}>
      <View style={styles.card_content}>
        <View>
          <Text style={styles.text}>Name: {name}</Text>
          <Text style={styles.text}>Calories: {calories}</Text>
          <Text style={styles.text}>Protein: {protein}</Text>
          <Text style={styles.text}>Carbs: {carbs}</Text>
          <Text style={styles.text}>Fat: {fat}</Text>
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
    height: 250,
    width: '100%',
  },
  card_content: {
    marginHorizontal: 18,
    marginVertical: 10,
    padding: 5,
    alignItems: 'flex-start',
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

export default FoodCard;
