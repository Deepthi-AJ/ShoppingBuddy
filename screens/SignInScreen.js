import React,{Component} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Image } from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import db from "../config";
import firebase from "firebase";

export default class SignInScreen extends Component {
    constructor() {
        super();
        this.state = {
          emailId: "",
          password: ""
        };
    }

    userLogIn = (emailId, password) => {
        firebase
          .auth()
          .signInWithEmailAndPassword(emailId, password)
          .then(() => {
            this.props.navigation.navigate("TabNavigator");
          })
          .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage);
          });
      };
    
    render(){
        return (
            <View>
                <Image style={{width:230,height:230,alignSelf:"center",margin:40}} source={require('../images/LogInIcon.png')}/>
                <TextInput
                    style={styles.loginBox}
                    placeholder="Email Id"
                    keyboardType="email-address"
                    onChangeText={text => {
                      this.setState({
                        emailId: text
                      });
                    }}
                />
                <TextInput
                    style={styles.loginBox}
                    secureTextEntry={true}
                    placeholder="Password"
                    onChangeText={text => {
                        this.setState({
                            password: text
                        });
                    }}
                />
                <TouchableOpacity style={styles.button} onPress={()=>{this.userLogIn(this.state.emailId,this.state.password)}}>
                    <Text style={{fontSize:20,fontWeight:"bold",color:"#ffc996"}}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={()=>{this.props.navigation.navigate("RegistrationScreen")}}>
                    <Text style={{fontSize:20,fontWeight:"bold",color:"#ffc996"}}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        );
    }
  
}

const styles = StyleSheet.create({
    button:{
        alignSelf:"center",
        backgroundColor:"#9f5f80",
        width:"40%",
        height:30,
        justifyContent:"center",
        alignItems:"center",
        padding:20,
        borderRadius:100,
        marginTop:40
    },
    button1:{
        alignSelf:"center",
        backgroundColor:"#9f5f80",
        width:"40%",
        height:30,
        justifyContent:"center",
        alignItems:"center",
        padding:20,
        borderRadius:100,
        marginTop:15
    },
    loginBox: {
        width: 300,
        height: 40,
        borderBottomWidth: 3,
        borderColor: "#583d72",
        fontSize: 20,
        margin: 10,
        paddingLeft: 10,
        alignSelf:"center"
    }
})