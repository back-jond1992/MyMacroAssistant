import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

const Button = ({
  onPress,
  text,
  type = 'primary',
  backgroundColor,
  textColor,
  disabled,
  icon,
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
      {icon}
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
    flexDirection: 'row',
  },
  container_primary: {
    backgroundColor: 'blue',
  },
  container_tertiary: {},
  container_social: {},
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_tertiary: {
    color: 'black',
  },
});

export default Button;
