import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import WelcomeScreen from './screens/WelcomeScreen';
import {AppTabNavigator} from './components/TabNavigator'
import SignInScreen from './screens/SignInScreen';
import RegistrationScreen from './screens/RegistrationScreen';

export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  SignInScreen:{screen:SignInScreen},
  RegistrationScreen:{screen:RegistrationScreen},
  TabNavigator:{screen:AppTabNavigator},
})

const AppContainer = createAppContainer(switchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
