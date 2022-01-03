import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const navigation = useNavigation();

  const onSend = () => {
    navigation.navigate('ResetPassword');
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
