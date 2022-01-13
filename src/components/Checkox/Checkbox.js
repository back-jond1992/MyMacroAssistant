import React from 'react';
import {View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Checkbox = ({value, setValue}) => {
  return <CheckBox disabled={false} value={value} onValueChange={setValue} />;
};

export default Checkbox;
