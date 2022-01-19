import React, {useState, useContext} from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import userContext from '../../contexts/userContexts/UserContext';

const EmailPasswordSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const {setCurrentUser} = useContext(userContext);

  const navigation = useNavigation();

  const onSignUp = () => {
    if (password === passwordCheck) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(response => {
          console.log(response);
          setCurrentUser(response);
          console.log('User account created & signed in!');
          navigation.navigate('Details');
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
