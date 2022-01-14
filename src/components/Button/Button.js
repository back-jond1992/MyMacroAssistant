import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const Button = ({
  onPress,
  text,
  type = 'primary',
  backgroundColor,
  textColor,
  disabled,
}) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        backgroundColor ? {backgroundColor: backgroundColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          textColor ? {color: textColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  container_primary: {
    backgroundColor: 'blue',
  },
  container_tertiary: {},
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_tertiary: {
    color: 'black',
  },
});

export default Button;
