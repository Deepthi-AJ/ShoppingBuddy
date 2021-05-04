import React,{Component} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'

export default class RegistrationScreen extends Component {
    render(){
        return (
            <View>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("TabNavigator")}}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
        );
    }
  
}