import React,{Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class WelcomeScreen extends Component {
    render(){
        return (
            <View style={{backgroundColor:"#ffc996",height:"100%",}}>
                <View style={{justifyContent:"center",height:"90%"}}>
                    <Text style={styles.title}>Shopping Buddy</Text>
                </View>
                
                <TouchableOpacity style={styles.SignInButton} onPress={()=>{this.props.navigation.navigate("SignInScreen")}}>
                    <Text style={{color:"#9f5f80",fontSize:20,fontWeight:"bold"}}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );
    }
  
}

const styles = StyleSheet.create({
    title:{
        alignSelf:"center",
        fontSize:40,
        fontWeight:"bold"
    },
    SignInButton:{
        backgroundColor:"#ff8474",
        alignSelf:"center",
        width:200,
        padding:10,
        borderRadius:100,
        alignItems:"center",
        borderColor:"black",
        borderWidth:2
    }
})