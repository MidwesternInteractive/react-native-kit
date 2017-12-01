import React from 'react'
import { StyleSheet } from 'react-native'
import { DrawerNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'


import loggedInContainer from './LoggedInContainer'
import Dashboard from '../../scenes/Dashboard'
import Scene3 from '../../scenes/Scene3'
import LoggedOut from '../LoggedOut/index'

import MainNavigation from './MainNavigation'

const MainRoutes = DrawerNavigator(
  {
    LoggedIn: { 
      screen: loggedInContainer,
      navigationOptions: ({navigation}) => ({
        drawerLabel: 'Home',
        drawerIcon: ({tintColor}) => <Icon
          name="ios-home"
          size={25}
          color={tintColor} 
          style = {styles.drawerIcons} 
        />  
      }),
    },
      LoggedOut: { 
      screen: LoggedOut,
      navigationOptions: ({navigation}) => ({
        drawerLabel: 'Log Out',
        drawerIcon: ({tintColor}) => <Icon
          name="ios-lock"
          size={25}
          color={tintColor} 
          style = {styles.drawerIcons} 
        />  
      }),
    },

    //HiddenRoutes
     //HiddenLoggedInContainer: { screen: loggedInContainer },
  },
  {
    contentComponent: MainNavigation,
    drawerPosition: 'right',
    headerMode: 'none',
    drawerWidth: 275,
    activeBackgroundColor: '#FFF',
    contentOptions: {
      activeTintColor: '#42c4db',
      inactiveTintColor: 'darkgray',
      activeBackgroundColor: '#FFF',
      style: {
        justifyContent: 'center', 
        marginTop: 8
      },
      labelStyle: {
        justifyContent: 'center', 
        fontSize: 13,
        fontWeight: '500', 
        marginTop: 8,
      }
    }
  }
)

const styles = StyleSheet.create({
    drawerIcons: {
        marginBottom: 4
    }
})

export default MainRoutes