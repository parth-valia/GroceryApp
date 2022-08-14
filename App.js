import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ListScreen from './src/screens/ListScreen';
import styles from './src/styles/styles';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ListScreen/>
    </SafeAreaView>
  );
};


export default App;
