import React from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Button } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Login extends React.Component
{
    constructor(props){
        super(props);
        this.state = 
        {
            email: '',
            password: '',
            type:['Student','Teacher','Admin']
        }
    }
    
    handleEmail = (text) => {
      this.setState({ email: text });
    }
    
    handlePassword = (text) => {
      this.setState({ password: text });
    }
    
    login = (email, pass) => {
      let i=2;
      this.props.navigation.navigate(this.state.type[i],{'uniqueID':0});
    }

    render() {
        return (
             <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}>Login </Text>
            </TouchableOpacity>
         </View>
        );
    }
}

export default Login; 

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: hp('10%'),
      width:  wp('60%'),
      borderColor: '#7a42f4',
      borderWidth: wp('0.04%'),
      textAlign: 'left'
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 15,
      margin: 15,
      height: hp('10%'),
      width:  wp('10%')
   },
   submitButtonText:{
      color: 'white',
      textAlign: 'center'
   }
})
