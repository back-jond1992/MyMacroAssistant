import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useContext} from 'react';
import Input from '../Input';
import Button from '../Button';
import {getFood, patchUser} from '../../api/api';
import FoodCard from '../FoodCard';
import userContext from '../../contexts/userContexts/UserContext';
import BulletList from '../BulletList';

const FoodSearch = () => {
  const [query, setQuery] = useState('');
  const [name, setName] = useState('food');
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fat, setFat] = useState(0);

  const {currentUser, setCurrentUser} = useContext(userContext);
  const user = currentUser;

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

  const addFood = () => {
    user.dailyFoodItems.push(name);
    const dailyMacros = {
      calories: user.dailyMacros.calories + calories,
      protein: user.dailyMacros.protein + protein,
      carbs: user.dailyMacros.carbs + carbs,
      fat: user.dailyMacros.fat + fat,
    };
    const weeklyMacros = {
      calories: user.weeklyMacros.calories + calories,
      protein: user.weeklyMacros.protein + protein,
      carbs: user.weeklyMacros.carbs + carbs,
      fat: user.weeklyMacros.fat + fat,
    };
    const update = {
      dailyMacros: dailyMacros,
      weeklyMacros: weeklyMacros,
      dailyFoodItems: user.dailyFoodItems,
    };
    console.log('food items', user.dailyFoodItems);
    console.log('update', update);
    patchUser(user._id, update).then(response => {
      console.log('response', response);
      setCurrentUser(response);
    });
  };

  return (
    <View>
      <View style={styles.search_container}>
        <Input
          placeholder="'e.g 175g chicken breast'"
          value={query}
          setValue={setQuery}
        />

        <Button onPress={searchFood} text={'Find Food'} />
      </View>

      <View style={styles.card_container}>
        <FoodCard
          name={name}
          calories={calories}
          protein={protein}
          carbs={carbs}
          fat={fat}
        />
      </View>
      <Button onPress={addFood} />
    </View>
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
  text: {
    color: 'black',
    fontSize: 16,
    lineHeight: 25,
  },
  text_important: {
    color: '#01dee6',
    fontSize: 18,
    fontWeight: 'bold',
  },
  search_container: {
    margin: 10,
  },
  text_container: {
    margin: 10,
  },
  card_container: {
    marin: 10,
  },
});

export default FoodSearch;
