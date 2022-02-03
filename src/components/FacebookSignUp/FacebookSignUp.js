import React from 'react';
import SocialButton from '../../components/SocialButton';
import {useNavigation} from '@react-navigation/native';
import {getUser} from '../../api/api';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';

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
      .then(response => {
        const userEmail = response.user.email;
        return getUser(userEmail);
      })
      .then(response => {
        if (response) {
          return Promise.reject({
            message: 'You already have an account. Go to login!',
          });
        } else {
          navigation.navigate('Details');
        }
      })
      .catch(error => {
        alert(`${error.message}`);
      });
  };

  return (
    <SocialButton
      onPress={onSignUpFacebook}
      text={'Sign up with Facebook'}
      backgroundColor={'#c13584'}
      button={faFacebook}
      color={'white'}
      type={'social'}
    />
  );
};

export default FacebookSignUp;
