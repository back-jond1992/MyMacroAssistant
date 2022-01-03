import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

const LogInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const onLogIn = () => {
    console.warn('Log in');
  };

  const onForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const onLogInGoogle = () => {
    console.warn('Log in');
  };

  const onLogInInstagram = () => {
    console.warn('Log in');
  };

  const onLogInApple = () => {
    console.warn('Log in');
  };

  const onNoAccount = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text>Log in</Text>

        <Input placeholder="Email" value={email} setValue={setEmail} />

        <Input
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <Button onPress={onLogIn} text={'Log In'} type={'primary'} />

        <Button
          onPress={onForgotPassword}
          text={'Forgotten password?'}
          type={'tertiary'}
        />

        <Text style={styles.text}>Or</Text>

        <Button
          onPress={onLogInGoogle}
          text={'Log in with Google'}
          backgroundColor={'#4285F4'}
        />

        <Button
          onPress={onLogInInstagram}
          text={'Log in with Instagram'}
          backgroundColor={'#c13584'}
        />

        <Button
          onPress={onLogInApple}
          text={'Log in with Apple'}
          backgroundColor={'#000000'}
        />

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
