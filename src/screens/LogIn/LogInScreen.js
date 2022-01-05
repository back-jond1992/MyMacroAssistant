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
      });
  };

  const onForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  async function onLogInGoogle() {
    const {idToken} = await GoogleSignin.signIn();
    console.log('this is id:', idToken);

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.log('credentials ----------', googleCredential);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  const onLogInInstagram = () => {
    console.warn('Log in');
  };

  const onLogInApple = () => {
    console.warn('Log in');
  };

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
          onPress={() => {
            onLogInGoogle().then(() => {
              console.log('logged in');
            });
          }}
          text={'Log in with Google'}
          backgroundColor={'#4285F4'}
        />

        <Button
          onPress={onLogInInstagram}
          text={'Log in with Instagram'}
          backgroundColor={'#c13584'}
        />

        <Button
          onPress={onLogInApple}
          text={'Log in with Apple'}
          backgroundColor={'#000000'}
        />

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
