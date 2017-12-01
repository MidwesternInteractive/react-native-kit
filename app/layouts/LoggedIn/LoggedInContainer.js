import React, { Component } from 'react'
import {Text} from 'react-native'

// Packages
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
// Components
import Dashboard from '../../scenes/Dashboard'
import Scene1 from '../../scenes/Scene1'
import Scene2 from '../../scenes/Scene2'



export default function loggedInContainer(props) {
  const TabNav = TabNavigator(
    {
      Dashboard: { screen: Dashboard, 
        navigationOptions: ({navigation}) =>({
        tabBarLabel: "Dashbaord",
        tabBarIcon: ({tintColor}) =>  <Icon name="ios-bonfire" size={20} color={tintColor}
        />
      }) },
      Scene1: { screen: Scene1, 
        navigationOptions: ({navigation}) =>({
        tabBarLabel: "Case Study",
        tabBarIcon: ({tintColor}) =>  <Icon name="ios-bulb" size={20} color={tintColor}
        />

    }) },
      Scene2: { screen: Scene2, 
        navigationOptions: ({navigation}) =>({
        tabBarLabel: "Contact",
        tabBarIcon: ({tintColor}) =>  <Icon name="ios-partly-sunny" size={20} color={tintColor}
        />

    }) },
    },    
    {
      lazy: true,
      tabBarPosition: 'bottom',
      animationEnabled: false,
      swipeEnabled: false,
      tabBarOptions: {
          activeTintColor: '#fd8a5e',
          showLabel: true,
          showIcon: true,
          inactiveTintColor:'#01dddd',
          style: {
              backgroundColor: '#ffffff',
              borderTopColor: '#01dddd'
          },
          tabStyle: {
            borderTopWidth: 1,
            borderTopColor: '#01dddd'
          },
          indicatorStyle: {
              backgroundColor: 'white'
          },
          activeTintColor: '#01dddd',
          inactiveTintColor: '#ddd'
      }
    }
  )

  return <TabNav 
    screenProps={{
      params: props.navigation.state.params,
      navigation: props.navigation
    }} 
  />
}