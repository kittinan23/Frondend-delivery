//This is an example code for Bottom Navigation//
import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
//import all the basic component we have used
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
 
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';
import Order from './Order';
import CardItemDetails from './CardItemDetails';
import CardListScreen from './CardListScreen';
import CheckBillScreen from './CheckBillScreen';
import BasketComponent from './Cart/BasketComponent';
import Footer from './Cart/Footer';
import Header from './Cart/Header';
import Item from './Cart/Item';
import ItemsContainer from './Cart/ItemsContainer';
import TotalComponent from './Cart/TotalComponent';
import Editscreen from './Editscreen';
import Mapscreen from './Mapscreen';

const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: HomeScreen },
    CardItemDetails: { screen: CardItemDetails },
    CardListScreen: { screen: CardListScreen },
    CheckBillScreen: { screen: CheckBillScreen },
    BasketComponent: { screen: BasketComponent },
    Footer: { screen: Footer },
    Header: { screen: Header },
    Item: { screen: Item },
    ItemsContainer: { screen: ItemsContainer },
    TotalComponent: { screen: TotalComponent },
    Editscreen: { screen: Editscreen },
    Editscreen: { screen: Mapscreen },
    Mapscreen: { screen: Mapscreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#7FCCFF',
      },
      headerTintColor: '#FFFFFF',
      title: 'Home',
      //Header title
    },
  }
);

const CardListStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    CardListScreen: { screen: CardListScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#7FCCFF',
      },
      headerTintColor: '#FFFFFF',
      title: 'FoodList',
      //Header title
    },
  }
);

const OrderStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Profile: { screen: Order },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#7FCCFF',
      },
      headerTintColor: '#FFFFFF',
      title: 'Cart',
      //Header title
    },
  }
);

const SettingsStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Settings: { screen: SettingsScreen },
  
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#7FCCFF',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings',
      //Header title
    },
  }
);
const Menu = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    CardListScreen: { screen: CardListStack },
    Order: { screen: OrderStack },
    Settings: { screen: SettingsStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        }
        if (routeName === 'Settings') {
          iconName = `ios-setings`;
        }
        if (routeName === 'FoodListScreenr') {
          iconName = `ios-list`;
        }
        if (routeName === 'Cart') {
          iconName = `ios-cart`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#7FCCFF',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(Menu);