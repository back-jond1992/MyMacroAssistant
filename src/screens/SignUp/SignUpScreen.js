import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

GoogleSignin.configure({
  webClientId:
    '721739332700-qk34a35uh16ctoimsio90upj5mviq07m.apps.googleusercontent.com',
});

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const navigation = useNavigation();

  const onSignUp = () => {
    if (password === passwordCheck) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            alert('That email address is already in use!');
          }
          if (error.code === 'auth/invalid-email') {
            alert('That email address is invalid!');
          }
          if (error.code === 'auth/weak-password') {
            alert('Password must be at least 6 characters!');
          }
        });
    } else {
      alert('Passwords do not match!');
    }
  };

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
        auth().signInWithCredential(facebookCredential);
      })
      .then(() => {
        navigation.navigate('HomePage');
      })
      .catch(error => {
        alert(`${error.message}`);
      });
  };

  // const onSignUpApple = () => {
  //   console.warn('Log in');
  // };

  const onAlreadyHaveAccount = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Sign up</Text>

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

        <Text style={styles.text}>or</Text>

        <Button
          onPress={onSignUpGoogle}
          text={'Sign up with Google'}
          backgroundColor={'#4285F4'}
        />

        <Button
          onPress={onSignUpFacebook}
          text={'Sign up with Facebook'}
          backgroundColor={'#c13584'}
        />

        {/* <Button
          onPress={onSignUpApple}
          text={'Sign up with Apple'}
          backgroundColor={'#000000'}
        /> */}

        <Text style={styles.text}>Already have an account?</Text>

        <Button text={'Log in'} onPress={onAlreadyHaveAccount} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  text: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
  },
});

export default SignUpScreen;
