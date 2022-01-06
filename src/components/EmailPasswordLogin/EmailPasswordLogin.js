import React, {useState} from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const EmailPasswordLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const onLogIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('HomePage');
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          alert('No account found with this email address.');
        }
        if (error.code === 'auth/wrong-password') {
          alert('Incorrect password.');
        }
      });
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

      <Button onPress={onLogIn} text={'Log In'} type={'primary'} />
    </>
  );
};

export default EmailPasswordLogin;
