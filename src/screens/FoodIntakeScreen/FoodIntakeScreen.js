import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import FoodSearch from '../../components/FoodSearch/FoodSearch';
import BulletList from '../../components/BulletList';

const FoodIntakeScreen = () => {
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={styles.root}>
        <Text style={styles.title}>Track your Macros</Text>

        <View style={styles.text_container}>
          <Text style={styles.text}>
            Use the search bar below to track your daily macros.
          </Text>

          <Text style={styles.text_important}>IMPORTANT!</Text>

          <BulletList
            style={styles.text}
            data={[
              'You much include the weight of the food you have eaten for the macros to be calculated correctly. For example 175g chicken breast.',
              'Weights can be in grams or pounds.',
            ]}
          />
        </View>

        <FoodSearch />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 7,
    alignContent: 'center',
  },
});

export default FoodIntakeScreen;
