import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList } from 'react-native';
import CategoryListItem from './components/CategoryListItem';
import Skii from './assets/skii.png';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, title: 'Dụng cụ trượt tuyết', imgSrc: Skii},
        { id: 2, title: 'Quần áo trượt tuyết', imgSrc: Skii},
        { id: 3, title: 'Kính mũ', imgSrc: Skii},
        { id: 4, title: 'Quần áo trượt tuyết', imgSrc: Skii},
        { id: 5, title: 'Quần áo trượt tuyết', imgSrc: Skii},
        { id: 6, title: 'Quần áo trượt tuyết', imgSrc: Skii},
        { id: 7, title: 'Quần áo trượt tuyết', imgSrc: Skii}
      ]
    };
  };

  render() {
    const { categories } = this.state;
    return (
        <View style={styles.container}>
          <FlatList 
            contentContainerStyle={{padding: 16}}
            data={categories}
            renderItem={({ item }) => <CategoryListItem title={item.title} imgSrc={item.imgSrc} />}
            keyExtractor={item => `${item.id}`}
          />
        </View>
      );
  };
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'stretch',
    justifyContent: 'center'
  }
});