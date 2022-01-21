import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import Button from '../Button';
import {useNavigation} from '@react-navigation/native';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {getUser} from '../../api/api';
import userContext from '../../contexts/userContexts/UserContext';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
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
        }
        if (!auth().currentUser) {
          return Promise.reject({
            message: "You don't have an account. Please Sign up!",
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
      onPress={onLogInFacebook}
      text={'Log in with Facebook'}
      backgroundColor={'#4267B2'}
      type={'social'}
      icon={<FontAwesomeIcon icon={faFacebook} size={20} color="white" />}
    />
  );
};

const styles = StyleSheet.create({});

export default FacebookLogin;
