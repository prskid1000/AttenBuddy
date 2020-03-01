 
import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Card, CardTitle, CardAction, CardButton} from 'react-native-cards';

 
const styles = StyleSheet.create(
{
    container: {
    paddingBottom:  wp('10%'),
  },
  gauge: {
    
    width: wp('45%'),
    alignItem: 'center',
    
  },
  
  submitButton: {
      backgroundColor: '#7a42f4',
      padding: 15,
      margin: 15,
      height: hp('10%'),
      width:  wp('20%')
   },
   submitButtonText:{
      color: 'white',
      textAlign: 'center'
   }
});


class Attendence extends Component {
  constructor(props) {
    super(props);
    
    this.state={
        date:"2016-05-15",
    }
  }
  
  submit
  
 
  render() {
      
    var p=this.props.navigation.getParam('start','0');
    var q=this.props.navigation.getParam('stop','0');
    if(p==q-5)
    {
    return (
     <ScrollView style={styles.container}>
     <Text>{p}</Text>
     <TouchableOpacity
               style = {styles.submitButton}
               onPress={() => this.props.navigation.navigate('ClassView',{'start':p+5,'stop':50})}>
               <Text style = {styles.submitButtonText}>DONE</Text>
    </TouchableOpacity>
    </ScrollView>
    );
    }
    else
    {
    return (
     <ScrollView style={styles.container}>
      <Card>
    <CardTitle
      subtitle="Number 6"
    />
    <CardAction 
      separator={true} 
      inColumn={false}>
      <CardButton
        onPress={() => {}}
        title="Share"
        color="#FEB557"
      />
      <CardButton
        onPress={() => {}}
        title="Explore"
        color="#FEB557"
      />
    </CardAction>
  </Card>
     <Text>{p}</Text>
     <TouchableOpacity
               style = {styles.submitButton}
               onPress={() => this.props.navigation.navigate('Attendence',{'start':p+5,'stop':50})}>
               <Text style = {styles.submitButtonText}>NEXT</Text>
    </TouchableOpacity>
    </ScrollView>
    );
    }
  }
}



export default Attendence
