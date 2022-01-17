import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Navigation from './src/navigation/index';
import userContext from './src/contexts/userContexts/UserContext';

const App = () => {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <userContext.Provider value={{currentUser, setCurrentUser}}>
      <SafeAreaView style={styles.root}>
        <Navigation />
      </SafeAreaView>
    </userContext.Provider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
