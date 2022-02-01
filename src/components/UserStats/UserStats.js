import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React, {useContext} from 'react';
import userContext from '../../contexts/userContexts/UserContext';

const screenSize = Dimensions.get('screen');

const UserStats = () => {
  const {currentUser} = useContext(userContext);
  const user = currentUser;

  if (user.avatar_url === 'no image') {
    user.avatar_url =
      'https://www.seekpng.com/png/detail/402-4022635_avatar-generic-person-icon.png';
  }

  return (
    <View style={styles.details_container}>
      <View style={styles.image_container}>
        <Image style={styles.image} source={{uri: user.avatar_url}} />
      </View>

      <View style={styles.text_container}>
        <Text style={styles.text_secondary}>Weight: {user.weight}lbs</Text>

        <Text style={styles.text_secondary}>Height: {user.height}"</Text>

        <Text style={styles.text_secondary}>Age: {user.age} yeas old.</Text>

        <Text style={styles.text_secondary}>
          Maintenance calories: {user.maintenance}
        </Text>

        <Text style={styles.text_secondary}>
          Target calories: {user.target}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  details_container: {
    flexDirection: 'row',
  },
  image_container: {
    justifyContent: 'flex-start',
  },
  text_container: {
    justifyContent: 'flex-start',
    marginLeft: 10,
  },
  text_primary: {
    alignItems: 'center',
    padding: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  text_secondary: {
    alignItems: 'center',
    padding: 2,
    fontSize: 14,
    color: '#000000',
  },
  image: {
    borderRadius: screenSize.width * 0.15,
    borderWidth: 1,
    borderColor: 0x000000ff,
    width: screenSize.width * 0.3,
    height: screenSize.width * 0.3,
  },
  text: {
    alignItems: 'center',
    padding: 20,
    fontSize: 16,
  },
});

export default UserStats;
