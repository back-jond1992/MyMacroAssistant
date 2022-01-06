import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const navigation = useNavigation();

  const onSend = () => {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert('A password reset email has been sent to ' + email);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if (error.code === 'auth/user-not-found') {
          alert('No account found with this email address.');
        }
        if (error.code === 'auth/invalid-email') {
          alert('That email address is invalid.');
        }
      });
  };

  const onBackToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Forgot Password?</Text>

        <Input placeholder="Email" value={email} setValue={setEmail} />

        <Button onPress={onSend} text={'Reset password'} type={'primary'} />

        <Button
          onPress={onBackToLogin}
          text={'Back to Login'}
          type={'primary'}
        />
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

export default ForgotPasswordScreen;
