import React from 'react';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation = useNavigation();

  const onForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <Button
      onPress={onForgotPassword}
      text={'Forgotten password?'}
      type={'tertiary'}
    />
  );
};

export default ForgotPassword;
