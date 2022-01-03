import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

const ResetPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const onReset = () => {
    console.warn('Log in');
  };

  const onBackToLogin = () => {
    console.warn('Log in');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your Password</Text>

        <Input placeholder="Code" value={code} setValue={setCode} />

        <Input
          placeholder="Enter your new password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <Input
          placeholder="Confirm password"
          value={passwordCheck}
          setValue={setPasswordCheck}
          secureTextEntry={true}
        />

        <Button onPress={onReset} text={'Reset password'} type={'primary'} />

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

export default ResetPasswordScreen;
