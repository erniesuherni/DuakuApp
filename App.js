import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
//import your components 
import DuaList from './components/DuaList';
//Export default the stateless component 
const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.duaListHeader}>Daily Dua</Text>
    </ScrollView>
  )
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  duaListHeader: {
    fontSize: 20,
    color: '#fff'
  }
});