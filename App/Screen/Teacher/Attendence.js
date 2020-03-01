 
import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Card, CardTitle, CardContent, CardAction, CardButton} from 'react-native-cards';

 
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
        student:[0,0,0,0,0]
    }
  }
  
  render() {
      
    var p=this.props.navigation.getParam('start','0');
    var q=this.props.navigation.getParam('stop','0');
    const cards=[];
    let c=0;
      for(let i=p;c<5&&i<q;i++,c++)
      {
          cards.push(<Card>
          <CardTitle subtitle={i}/>
          <CardContent><Text>{this.state.student[i]==1?'Present':'Absent'}</Text></CardContent>
          <CardAction separator={true} inColumn={false}>
          <CardButton onPress={() => {var arr=this.state.student.slice();
        arr[i]=1;
        this.setState({student:arr});}} title="Present" color="#FEB557"/>
          <CardButton onPress={() => {var arr=this.state.student.slice();
        arr[i]=0;
        this.setState({student:arr});}} title="Absent" color="#FEB557"/>
          </CardAction></Card>);
      }
    if(p==q-5)
    {
    return (
     <ScrollView style={styles.container}>
     <View>{cards}</View>
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
      var dp="Remaining Rolls="+(q-(p+5));
    return (
     <ScrollView style={styles.container}>
      <View>{cards}</View>
      <Card>
          <CardTitle subtitle={dp}/>
          <CardAction separator={true} inColumn={false}>
          </CardAction></Card>
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
