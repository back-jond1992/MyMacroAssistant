import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import SocialButton from '../SocialButton/SocialButton';
import {useNavigation} from '@react-navigation/native';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {getUser} from '../../api/api';
import userContext from '../../contexts/userContexts/UserContext';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';

const FacebookLogin = () => {
  const {setCurrentUser} = useContext(userContext);

  const navigation = useNavigation();

  const onLogInFacebook = () => {
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
        if (!response) {
          return Promise.reject({
            message: "You don't have an account. Please Sign up!",
          });
        } else {
          setCurrentUser(response);
          navigation.navigate('HomePage');
        }
      })
      .catch(error => {
        alert(`${error.message}`);
      });
  };

  return (
    <SocialButton
      onPress={onLogInFacebook}
      text={'Log in with Facebook'}
      backgroundColor={'#4267B2'}
      button={faFacebook}
      color={'white'}
      type={'social'}
    />
  );
};

const styles = StyleSheet.create({});

export default FacebookLogin;
