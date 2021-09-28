import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoryListItem from './components/CategoryListItem';
import Skii from './assets/skii.png';

export default function App() {
  return (
    <View style={styles.container}>
      <CategoryListItem title="skiing tools" imgSrc={Skii}/>
      <CategoryListItem title="smurf tools" imgSrc={Skii}/>
      <CategoryListItem title="re tools" imgSrc={Skii}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginLeft: 16,
    marginRight: 16
  }
});
