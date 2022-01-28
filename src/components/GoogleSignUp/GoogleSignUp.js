import auth from '@react-native-firebase/auth';
import React, {useContext} from 'react';
import SocialButton from '../SocialButton';
import {useNavigation} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';

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
        return auth().signInWithCredential(googleCredential);
      })
      .then(() => {
        navigation.navigate('Details');
      })
      .catch(error => {
        alert(`${error.message}`);
      });
  };

  return (
    <SocialButton
      onPress={onSignUpGoogle}
      text={'Sign up with Google'}
      backgroundColor={'#4285F4'}
      button={faGoogle}
      color={'#DB4437'}
      type={'social'}
    />
  );
};

export default GoogleSignUp;
