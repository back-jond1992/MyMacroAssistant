import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '721739332700-qk34a35uh16ctoimsio90upj5mviq07m.apps.googleusercontent.com',
});

const LogInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const onLogIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('HomePage');
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          alert('No account found with this email address!');
        }
        if (error.code === 'auth/wrong-password') {
          alert('Incorrect password!');
        }
      });
  };

  const onForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

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
        auth().signInWithCredential(googleCredential);
      })
      .then(() => {
        navigation.navigate('HomePage');
      })
      .catch(error => {
        alert(`${error.message}`);
      });
  };

  const onLogInInstagram = () => {
    console.warn('Log in');
  };

  // const onLogInApple = () => {
  //   console.warn('Log in');
  // };

  const onNoAccount = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text>Log in</Text>

        <Input placeholder="Email" value={email} setValue={setEmail} />

        <Input
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <Button onPress={onLogIn} text={'Log In'} type={'primary'} />

        <Button
          onPress={onForgotPassword}
          text={'Forgotten password?'}
          type={'tertiary'}
        />

        <Text style={styles.text}>Or</Text>

        <Button
          onPress={onLogInGoogle}
          text={'Log in with Google'}
          backgroundColor={'#4285F4'}
        />

        <Button
          onPress={onLogInInstagram}
          text={'Log in with Instagram'}
          backgroundColor={'#c13584'}
        />

        {/* <Button
          onPress={onLogInApple}
          text={'Log in with Apple'}
          backgroundColor={'#000000'}
        /> */}

        <Text style={styles.text}>Not got an account?</Text>

        <Button text={'Sign Up Here'} onPress={onNoAccount} />
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
});

export default LogInScreen;
