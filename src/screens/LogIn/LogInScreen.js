import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import GoogleLogin from '../../components/GoogleLogin/GoogleLogin';
import FacebookLogin from '../../components/FacebookLogin/FacebookLogin';
import EmailPasswordLogin from '../../components/EmailPasswordLogin';
import ForgotPassword from '../../components/ForgotPassword/ForgotPassword';

const LogInScreen = () => {
  const navigation = useNavigation();

  // const onLogInApple = () => {
  //   console.warn('Log in');
  // };

  const onNoAccount = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text>Log in</Text>

        <EmailPasswordLogin />

        <ForgotPassword />

        <Text style={styles.text}>Or</Text>

        <GoogleLogin />

        <FacebookLogin />

        {/* <Button
          onPress={onLogInApple}
          text={'Log in with Apple'}
          backgroundColor={'#000000'}
        /> */}

        <Text style={styles.text}>Not got an account?</Text>

        <Button text={'Sign Up Here'} onPress={onNoAccount} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  text: {
    alignItems: 'center',
    padding: 20,
  },
});

export default LogInScreen;
