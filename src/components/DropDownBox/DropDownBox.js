import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const DropDownBox = ({options, setValue}) => {
  return (
    <TouchableOpacity>
      <Picker onValueChange={setValue}>
        {options.map((option, index) => {
          return <Picker.Item label={option} value={{option}} key={index} />;
        })}
      </Picker>
    </TouchableOpacity>
  );
};

export default DropDownBox;
