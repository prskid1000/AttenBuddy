 
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
        student:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
        pt:0,
    }
  }
  
  render() {
      
    var p=this.props.navigation.getParam('start','0');
    var q=this.props.navigation.getParam('stop','0');
    var sub=this.props.navigation.getParam('Subject','0');
    const cards=[];
      for(let i=p;i<q;i++)
      {
          cards.push(<Card>
          <CardTitle subtitle={i}/>
          <CardContent><Text>Today: {this.state.student[i]==1?'Present':'Absent'}</Text></CardContent>
          <CardContent><Text>Percentage:</Text></CardContent>
          <CardAction separator={true} inColumn={false}>
          <CardButton onPress={() => {var arr=this.state.student.slice();
        arr[i]=1;
        this.setState({student:arr});if(this.state.student[i]==0)this.setState({pt:this.state.pt+1});}} title="Present" color="#FEB557"/>
          <CardButton onPress={() => {var arr=this.state.student.slice();
        arr[i]=0;
        this.setState({student:arr});if(this.state.student[i]==1)this.setState({pt:this.state.pt-1});}} title="Absent" color="#FEB557"/>
          </CardAction></Card>);
      }
    return (
     <ScrollView style={styles.container}>
     <View>{cards}</View>
     <Card>
          <CardTitle subtitle='Review'/>
          <CardContent><Text>Present: {this.state.pt}</Text></CardContent>
          <CardContent><Text>Absent:  {q-this.state.pt}</Text></CardContent>
          <CardAction separator={true} inColumn={false}>
          </CardAction></Card>
     <TouchableOpacity
               style = {styles.submitButton}
               onPress={() => {this.props.navigation.navigate('ClassView',{'Subject':sub});}}>
               <Text style = {styles.submitButtonText}>DONE</Text>
    </TouchableOpacity>
    </ScrollView>
    );
    }
}



export default Attendence
