import auth from '@react-native-firebase/auth';
import React from 'react';
import Button from '../Button';
import {useNavigation} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '721739332700-qk34a35uh16ctoimsio90upj5mviq07m.apps.googleusercontent.com',
});

const GoogleSignUp = () => {
  const navigation = useNavigation();

  const onSignUpGoogle = () => {
    return GoogleSignin.signIn()
      .then(({idToken}) => {
        if (auth().currentUser) {
          return Promise.reject({
            message: 'You already have an account. Go to login!',
          });
        } else {
          return auth.GoogleAuthProvider.credential(idToken);
        }
      })
      .then(googleCredential => {
        auth().signInWithCredential(googleCredential);
      })
      .then(() => {
        navigation.navigate('HomePage');
      })
      .catch(error => {
        alert(`${error.message}`);
      });
  };

  return (
    <Button
      onPress={onSignUpGoogle}
      text={'Sign up with Google'}
      backgroundColor={'#4285F4'}
    />
  );
};

export default GoogleSignUp;
