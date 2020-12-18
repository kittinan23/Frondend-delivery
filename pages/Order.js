import React, { Component } from 'react';
import { View } from 'react-native';
import Footer from './Cart/Footer';
import Header from './Cart/Header';
import ItemsContainer from './Cart/ItemsContainer';
import BasketContainer from './Cart/BasketComponent';

export default class Cart extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <ItemsContainer />
        <BasketContainer />
        <Footer />
      </View>
      
    );
  }
}