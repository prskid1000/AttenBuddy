import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Card, CardTitle, CardContent, CardAction, CardButton} from 'react-native-cards';

const styles = StyleSheet.create({
    Container: 
    {
         paddingBottom:  wp('10%'),
    },
});

class Admin extends React.Component
{
    constructor(props){
        super(props);
    }

    render() {
        return (
        <ScrollView style={styles.container}>
          <Card>
          <CardTitle subtitle='Student Management'/>
          <CardContent><Text>It is use to modify student database</Text></CardContent>
          <CardAction separator={true} inColumn={false}>
          <CardButton onPress={() => {;}} title="Batch Removal" color="#FEB557"/>
          <CardButton onPress={() => {;}} title="Batch Add" color="#FEB557"/>
          <CardButton onPress={() => {;}} title="Batch Subject" color="#FEB557"/>
          </CardAction></Card>
           <Card>
          <CardTitle subtitle='Faculty Management'/>
          <CardContent><Text>It is use to modify teacher database</Text></CardContent>
          <CardAction separator={true} inColumn={false}>
          <CardButton onPress={() => {;}} title="Teacher Subject" color="#FEB557"/>
          </CardAction></Card>
        </ScrollView>
        );
    }
}

export default Admin; 
