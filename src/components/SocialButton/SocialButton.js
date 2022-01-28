import React from 'react';
import {Text, StyleSheet, Pressable, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const SocialButton = ({
  onPress,
  text,
  type = 'primary',
  backgroundColor,
  textColor,
  disabled,
  button,
  color,
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
      <View style={styles.container_social}>
        <FontAwesomeIcon icon={button} size={20} color={color} />
      </View>
      <View style={styles.text_container}>
        <Text
          style={[
            styles.text,
            styles[`text_${type}`],
            textColor ? {color: color} : {},
          ]}>
          {text}
        </Text>
      </View>
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
  container_social: {
    alignItems: 'center',
  },
  text_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  text_tertiary: {
    color: 'black',
  },
  text_social: {
    alignItems: 'center',
  },
});

export default SocialButton;
