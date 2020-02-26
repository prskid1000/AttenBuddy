import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button,Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    Container: 
    {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    Logo: 
    {
        height: hp('65%'), 
        width: wp('40%')
    },
});

class welcome extends React.Component
{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.Container}>
                <TouchableOpacity onPress={() =>      this.props.navigation.navigate('Login',{})}>
                     <Image source={require("../../assets/logos/logo.gif")} style={styles.Logo}/>
                </TouchableOpacity>
            </View>
        );
    }
}

export default welcome; 
