import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';

const MacroCarousel = ({text, cards}) => {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <FlatList
        data={cards}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        renderItem={({item}) => <View style={styles.card}>{item}</View>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default MacroCarousel;
