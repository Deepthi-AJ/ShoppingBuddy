import React,{Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'

export default class SignInScreen extends Component {
    render(){
        return (
            <View>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("TabNavigator")}}>
                    <Text>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("RegistrationScreen")}}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>
            </View>
        );
    }
  
}
