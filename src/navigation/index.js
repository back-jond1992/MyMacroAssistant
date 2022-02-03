import React, {useState, useContext} from 'react';
import LogInScreen from '../screens/LogIn';
import SignUpScreen from '../screens/SignUp';
import ForgotPasswordScreen from '../screens/ForgotPassword/ForgotPasswordScreen';
import DetailsScreen from '../screens/Details/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import FoodIntakeScreen from '../screens/FoodIntakeScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Header';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const user = auth().currentUser;

  const [signedIn, setSignedIn] = useState(false);

  return signedIn ? (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerTitle: props => <Header {...props} />,
          headerStyle: {backgroundColor: '#36454f'},
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: '#36454F'},
          tabBarInactiveTintColor: 'white',
          tabBarActiveTintColor: '#01dee6',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) => {
              return <Ionicons name="home" color={color} size={30} />;
            },
          }}
        />
        <Tab.Screen
          name="FoodIntake"
          component={FoodIntakeScreen}
          options={{
            tabBarIcon: ({color}) => {
              return (
                <MaterialCommunityIcons
                  name="food-fork-drink"
                  color={color}
                  size={30}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({color}) => {
              return <Ionicons name="settings" color={color} size={30} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: props => <Header {...props} />,
          headerStyle: {backgroundColor: '#36454f'},
        }}>
        {/* <Stack.Screen name="Login" component={LogInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} /> */}

        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="HomePage" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
