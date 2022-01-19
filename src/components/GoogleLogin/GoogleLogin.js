import React, {useContext} from 'react';
import Button from '../Button';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {getUser} from '../../api/api';
import userContext from '../../contexts/userContexts/UserContext';

GoogleSignin.configure({
  webClientId:
    '721739332700-qk34a35uh16ctoimsio90upj5mviq07m.apps.googleusercontent.com',
});

const GoogleLogin = () => {
  const {setCurrentUser} = useContext(userContext);

  const navigation = useNavigation();

  const onLogInGoogle = () => {
    return GoogleSignin.signIn()
      .then(({idToken}) => {
        if (!auth().currentUser) {
          return Promise.reject({
            message: "You don't have an account. Please Sign up!",
          });
        } else {
          return auth.GoogleAuthProvider.credential(idToken);
        }
      })
      .then(googleCredential => {
        return auth().signInWithCredential(googleCredential);
      })
      .then(response => {
        const userEmail = response.user.email;
        getUser(userEmail).then(response => {
          setCurrentUser(response);
          navigation.navigate('HomePage');
        });
      })
      .catch(error => {
        alert(`${error.message}`);
      });
  };

  return (
    <Button
      onPress={onLogInGoogle}
      text={'Log in with Google'}
      backgroundColor={'#4285F4'}
    />
  );
};

export default GoogleLogin;
