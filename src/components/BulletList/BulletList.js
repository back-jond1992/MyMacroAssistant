import {View, Text} from 'react-native';
import React from 'react';

const BulletList = ({data, style}) => {
  return data.map((content, index) => {
    return (
      <View key={index} style={{flexDirection: 'row'}}>
        <Text style={style}>{'\u2022'}</Text>
        <Text style={style}>{content}</Text>
      </View>
    );
  });
};

export default BulletList;
