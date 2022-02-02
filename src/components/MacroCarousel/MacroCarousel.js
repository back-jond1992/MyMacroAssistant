import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';

const MacroCarousel = ({text, cards}) => {
  const ListItem = ({item}) => {
    return <View style={styles.card}>{item}</View>;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <FlatList
        data={cards}
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        renderItem={({item}) => <ListItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    //width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  text: {
    margin: 15,
    fontSize: 20,
    color: 'black',
  },
});

export default MacroCarousel;
