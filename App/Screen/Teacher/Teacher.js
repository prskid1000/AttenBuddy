import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import CollapseView from "react-native-collapse-view";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import GaugeChart from 'react-gauge-chart'

 
const styles = StyleSheet.create(
{
    container: {
    backgroundColor: '#8080ff',
  },
  view: {
    height:  hp('12%'),
    padding: wp('2%'),
    justifyContent:'center',
    backgroundColor:'#4d4dff',
  },
  collapseView: {
    padding: 20
  },
});


class Teacher extends Component {
  constructor(props) {
    super(props);
    
    this.state={
    }
  }
  
  _renderView1 = (collapse) => {
    return(
      <View style={styles.view}>
        <Text>FIRST YEAR</Text>
      </View>
    )
  }

  _renderCollapseView1 = (collapse) => {
    return(
      <View style={styles.collapseView}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ClassView',{'Subject':1,})}><Text>Subect4</Text></TouchableOpacity>
      </View>
    )
  }
  
  _renderView2 = (collapse) => {
    return(
      <View style={styles.view}>
        <Text>SECOND YEAR</Text>
      </View>
    )
  }

  _renderCollapseView2 = (collapse,data) => {
    return(
      <View style={styles.collapseView}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ClassView',{'Subject':2,})}><Text>Subect4</Text></TouchableOpacity>
      </View>
    )
  }
  
  _renderView3 = (collapse) => {
    return(
      <View style={styles.view}>
        <Text>THIRD YEAR</Text>
      </View>
    )
  }

  _renderCollapseView3 = (collapse) => {
    return(
      <View style={styles.collapseView}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ClassView',{'Subject':3,})}><Text>Subect3</Text></TouchableOpacity>
      </View>
    )
  }
  
  _renderView4 = (collapse) => {
    return(
      <View style={styles.view}>
        <Text>FOURTH YEAR</Text>
      </View>
    )
  }

  _renderCollapseView4 = (collapse,data) => {
    return(
      <View style={styles.collapseView}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ClassView',{'Subject':4,})}><Text>Subect4</Text></TouchableOpacity>
      </View>
    )
  }
 
  
  render() {
    return (
     <ScrollView>
     <View style={styles.container}>
      <CollapseView 
        renderView={this._renderView1}
        renderCollapseView={this._renderCollapseView1}
      />
      <CollapseView
        renderView={this._renderView2}
        renderCollapseView={this._renderCollapseView2}
      />
      <CollapseView
        renderView={this._renderView3}
        renderCollapseView={this._renderCollapseView3}
      />
      <CollapseView
        renderView={this._renderView4}
        renderCollapseView={this._renderCollapseView4}
      />
    </View>
    </ScrollView>
    );
  }
}



export default Teacher
