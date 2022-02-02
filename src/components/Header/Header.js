import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.text}>MyMacroAssistant</Text>
      </View>
      <View>
        <MaterialCommunityIcons
          name="weight-lifter"
          color={'white'}
          size={30}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    color: '#01dee6',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Header;
