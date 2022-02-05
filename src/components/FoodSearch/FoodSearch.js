import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Input from '../Input';
import Button from '../Button';
import {getFood} from '../../api/api';

const FoodSearch = () => {
  const [query, setQuery] = useState('');

  const searchFood = () => {
    getFood(query).then(response => {
      console.log(response);
    });
  };

  return (
    <View>
      <Input placeholder="Search" value={query} setValue={setQuery} />

      <Button onPress={searchFood} />
    </View>
  );
};

export default FoodSearch;
