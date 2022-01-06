import React, {useState} from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const EmailPasswordSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const navigation = useNavigation();

  const onSignUp = () => {
    if (password === passwordCheck) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .then(() => {
          navigation.navigate('HomePage');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            alert('That email address is already in use.');
          }
          if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid.');
          }
          if (error.code === 'auth/weak-password') {
            alert('Password must be at least 6 characters.');
          }
        });
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <>
      <Input placeholder="Email" value={email} setValue={setEmail} />

      <Input
        placeholder="Password"
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

      <Button onPress={onSignUp} text={'Sign Up'} type={'primary'} />
    </>
  );
};

export default EmailPasswordSignUp;
