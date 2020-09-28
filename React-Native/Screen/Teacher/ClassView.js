 
import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import CollapseView from "react-native-collapse-view";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import GaugeChart from 'react-gauge-chart'
import DatePicker from 'react-native-datepicker'

 
const styles = StyleSheet.create(
{
    container: {
    position: 'relative',
    left: wp('25%'),
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


class ClassView extends Component {
  constructor(props) {
    super(props);
    
    this.state={
        date:"2016-05-15",
    }
  }
  
 
  render() {
    return (
     <ScrollView style={styles.container}>
     <Text><h1><b>Subject:{this.props.navigation.getParam('Subject','Nill')}</b></h1></Text>
     <View style={styles.gauge}>
          <GaugeChart id="gauge-chart5" nrOfLevels={20} arcPadding={0.01} cornerRadius={3}percent={0.6}/>
     </View>
     <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
     <TouchableOpacity
               style = {styles.submitButton}
               onPress={() => this.props.navigation.navigate('Attendence',{'date':this.state.date,'start':0,'stop':50,'Subject':this.props.navigation.getParam('Subject','Nill')})}>
               <Text style = {styles.submitButtonText}>Attendence</Text>
    </TouchableOpacity>
    </ScrollView>
    );
  }
}



export default ClassView
