import React, {useContext} from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import userContext from '../../contexts/userContexts/UserContext';
import UserStats from '../../components/UserStats';
import MacroCarousel from '../../components/MacroCarousel';
import MacroCard from '../../components/MacroCard';

const screenSize = Dimensions.get('screen');

const dailyMacros = [
  <MacroCard text={'Calories'} />,
  <MacroCard text={'Protein'} />,
  <MacroCard text={'Carbs'} />,
  <MacroCard text={'Fat'} />,
];

const weeklyMacros = [
  <MacroCard text={'Calories'} />,
  <MacroCard text={'Protein'} />,
  <MacroCard text={'Carbs'} />,
  <MacroCard text={'Fat'} />,
];

const HomeScreen = () => {
  const {currentUser} = useContext(userContext);
  const user = currentUser;

  return (
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
