import React, { Component } from 'react'
import { AppRegistry, View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'

import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons'

import LoggedOut from './layouts/LoggedOut/index'
import LoggedIn from './layouts/LoggedIn/LoggedInContainer'
import MainNavigation from './layouts/LoggedIn/MainNavigation'
import MainRoutes from './layouts/LoggedIn/MainRoutes'


class templateApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
    }
  }

  renderScene() {
    const Nav = StackNavigator(
      {
        LoggedOut: { screen: LoggedOut },
        LoggedIn: { screen:  MainRoutes }
      },
      {
        initialRouteName: this.state.isLoggedIn
          ? 'LoggedIn' 
          : 'LoggedOut',
        headerMode: 'none'
      },
      {
      ScreenNavigationOptions:{
        gesturesEnabled: false,
        }
      }
    )

    return <Nav />
  }

  render() {
    return (this.state.isLoading) && <Loading />
      || this.renderScene()
  }
}
export default templateApp