import React, {useContext} from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import userContext from '../../contexts/userContexts/UserContext';
import UserStats from '../../components/UserStats';
import MacroCarousel from '../../components/MacroCarousel';
import MacroCard from '../../components/MacroCard';

const screenSize = Dimensions.get('screen');

const HomeScreen = () => {
  const {currentUser} = useContext(userContext);
  const user = currentUser;

  const dailyCalories = user.dailyMacros.calories;
  const dailyProtein = user.dailyMacros.protein;
  const dailyCarbs = user.dailyMacros.carbs;
  const dailyFat = user.dailyMacros.fat;

  const weeklyCalories = user.weeklyMacros.calories;
  const weeklyProtein = user.weeklyMacros.protein;
  const weeklyCarbs = user.weeklyMacros.carbs;
  const weeklyFat = user.weeklyMacros.fat;

  const dailyMacros = [
    <MacroCard text={'Calories'} data={dailyCalories} />,
    <MacroCard text={'Protein'} data={dailyProtein} />,
    <MacroCard text={'Carbs'} data={dailyCarbs} />,
    <MacroCard text={'Fat'} data={dailyFat} />,
  ];

  const weeklyMacros = [
    <MacroCard text={'Calories'} data={weeklyCalories} />,
    <MacroCard text={'Protein'} data={weeklyProtein} />,
    <MacroCard text={'Carbs'} data={weeklyCarbs} />,
    <MacroCard text={'Fat'} data={weeklyFat} />,
  ];

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Text style={styles.text_primary}>Hi {user.name}</Text>

          <UserStats />
        </View>

        <View>
          <MacroCarousel text={'Today'} cards={dailyMacros} />
        </View>

        <View>
          <MacroCarousel text={'This Week'} cards={weeklyMacros} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  image_container: {
    justifyContent: 'flex-start',
  },
  text_container: {
    justifyContent: 'flex-start',
    marginLeft: 10,
  },
  text_primary: {
    alignItems: 'center',
    padding: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  text_secondary: {
    alignItems: 'center',
    padding: 2,
    fontSize: 14,
    color: '#000000',
  },
  image: {
    borderRadius: screenSize.width * 0.15,
    borderWidth: 1,
    borderColor: 0x000000ff,
    width: screenSize.width * 0.3,
    height: screenSize.width * 0.3,
  },
  text: {
    alignItems: 'center',
    padding: 20,
    fontSize: 16,
  },
});

export default HomeScreen;
