import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import GoogleSignUp from '../../components/GoogleSignUp';
import FacebookSignUp from '../../components/FacebookSignUp';
import EmailPasswordSignUp from '../../components/EmailPasswordSignUp/EmailPasswordSignUp';

const SignUpScreen = () => {
  const navigation = useNavigation();

  // const onSignUpApple = () => {
  //   console.warn('Log in');
  // };

  const onAlreadyHaveAccount = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Sign up</Text>

        <EmailPasswordSignUp />

        <Text style={styles.text}>or</Text>

        <GoogleSignUp />

        <FacebookSignUp />

        {/* <Button
          onPress={onSignUpApple}
          text={'Sign up with Apple'}
          backgroundColor={'#000000'}
        /> */}

        <Text style={styles.text}>Already have an account?</Text>

        <Button text={'Log in'} onPress={onAlreadyHaveAccount} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
  },
});

export default SignUpScreen;
