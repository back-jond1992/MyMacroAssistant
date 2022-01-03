import React from 'react';
import {View, Text} from 'react-native';
import LogInScreen from '../screens/LogIn';
import SignUpScreen from '../screens/SignUp';
import ForgotPasswordScreen from '../screens/ForgotPassword/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPassword/ResetPasswordScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LogInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
