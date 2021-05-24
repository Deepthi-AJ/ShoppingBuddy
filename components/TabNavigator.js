import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ShoppingListScreen from '../screens/ShoppingListScreen';
import ExpensesScreen from '../screens/ExpensesScreen';

export const AppTabNavigator = createBottomTabNavigator({
  ShoppingListScreen : {
    screen: ShoppingListScreen,
    navigationOptions :{
      tabBarLabel : "Shopping List",
    }
  },
  ExpensesScreen: {
    screen: ExpensesScreen,
    navigationOptions :{
      tabBarLabel : "Expenses",
    }
  }
});
