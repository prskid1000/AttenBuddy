import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    Container: 
    {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        top: hp('10%')
    },
});

class Student extends React.Component
{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.Container}>
            </View>
        );
    }
}

export default Student; 
