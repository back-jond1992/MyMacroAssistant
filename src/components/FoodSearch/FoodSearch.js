import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Input from '../Input';
import Button from '../Button';
import {getFood} from '../../api/api';
import FoodCard from '../FoodCard';
import {ScrollView} from 'react-native-gesture-handler';

const FoodSearch = () => {
  const [query, setQuery] = useState('');
  const [name, setName] = useState('food');
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fat, setFat] = useState(0);

  const searchFood = () => {
    getFood(query).then(response => {
      let food = response[0];
      setName(food.name);
      setCalories(food.calories);
      setProtein(food.protein_g);
      setCarbs(food.carbohydrates_total_g);
      setFat(food.fat_total_g);
    });
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={styles.root}>
        <Text style={styles.title}>What have you eaten?</Text>
        <Input placeholder="Search" value={query} setValue={setQuery} />

        <Button onPress={searchFood} />

        <FoodCard
          name={name}
          calories={calories}
          protein={protein}
          carbs={carbs}
          fat={fat}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 7,
    alignContent: 'center',
  },
  title: {
    margin: 5,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default FoodSearch;
