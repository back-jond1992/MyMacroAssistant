import React, {useState, useContext} from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {getUser} from '../../api/api';
import userContext from '../../contexts/userContexts/UserContext';

const EmailPasswordLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {setCurrentUser} = useContext(userContext);

  const navigation = useNavigation();

  const onLogIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        const userEmail = response.user.email;
        getUser(userEmail).then(response => {
          setCurrentUser(response);
          navigation.navigate('HomePage');
        });
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
