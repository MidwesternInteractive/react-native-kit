import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Keyboard,
  Dimensions
} from 'react-native';
// Packages
import {NavigationActions} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons';
// Components
import Header from '../../components/Header';

import { ifIphoneX } from 'react-native-iphone-x-helper'

var { height, width } = Dimensions.get('window');

export default function LoggedIn(WrappedComponent) {
  return LayoutContainer = (props) =>  {

    // Store Route
    const route = props.navigation.state.routeName;

    return (
        <View style={styles.container}>
          <StatusBar barStyle='light-content'/>
          <Header 
            {...props}
          />
          <View style={styles.content}>
            <WrappedComponent {...props}/>
          </View>
        </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#FFF',
    height: height,
    width: width,
  },
  content: {
    flex:1,
    height: height
    
  }
}); 