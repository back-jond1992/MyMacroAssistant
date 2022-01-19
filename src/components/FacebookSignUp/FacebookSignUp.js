import React from 'react';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

const FacebookSignUp = () => {
  const navigation = useNavigation();

  const onSignUpFacebook = () => {
    return LoginManager.logInWithPermissions(['public_profile', 'email'])
      .then(result => {
        if (result.isCancelled) {
          return Promise.reject({message: 'User cancelled the login process'});
        }

        return AccessToken.getCurrentAccessToken();
      })
      .then(data => {
        if (!data) {
          return Promise.reject({
            message: 'Something went wrong obtaining access token',
          });
        }
        if (auth().currentUser) {
          return Promise.reject({
            message: 'You already have an account. Go to login!',
          });
        } else {
          return auth.FacebookAuthProvider.credential(data.accessToken);
        }
      })
      .then(facebookCredential => {
        return auth().signInWithCredential(facebookCredential);
      })
      .then(() => {
        navigation.navigate('Details');
      })
      .catch(error => {
        alert(`${error.message}`);
      });
  };

  return (
    <Button
      onPress={onSignUpFacebook}
      text={'Sign up with Facebook'}
      backgroundColor={'#c13584'}
    />
  );
};

export default FacebookSignUp;
