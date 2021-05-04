import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ExpensesScreen from '../screens/ExpensesScreen';
import ShoppingListScreen from '../screens/ShoppingListScreen'

export const AppTabNavigator = createBottomTabNavigator({
  ShoppingList:{
      screen: ShoppingListScreen
  },
  Expenses: {
    screen: ExpensesScreen,
  },
  
});