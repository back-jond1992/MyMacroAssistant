import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LogInScreen from '../screens/LogIn';
import SignUpScreen from '../screens/SignUp';
import ForgotPasswordScreen from '../screens/ForgotPassword/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPassword/ResetPasswordScreen';
import DetailsScreen from '../screens/Details/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import FoodIntakeScreen from '../screens/FoodIntakeScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const [signedIn, setSignedIn] = useState(true);

  return signedIn ? (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{tabBarBadge: 3}}
        />
        <Tab.Screen name="FoodIntake" component={FoodIntakeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Login" component={LogInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} /> */}
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
        <Stack.Screen name="HomePage" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'blue',
  },
});

export default Navigation;
