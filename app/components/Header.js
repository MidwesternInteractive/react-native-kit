import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerNavigator, NavigationActions,} from 'react-navigation';
import { ifIphoneX } from 'react-native-iphone-x-helper';
//Icons and Images
const companyIcon = require('../images/WhiteMidwestLogo.png')
var navigationIcon = (<Icon name="md-list" size={40} color="white" />)
const drawerButton =  (<Icon name="ios-menu" size={40} color='#FFF'/>)


const Header = (props) => {

  const { navigation } = props.screenProps
  console.log('HeaderProps', props)
    ? props.screenProps 
    : props

  return (
    <View style = {styles.headerWrapper}>
      <View style = {styles.headerIconWrap}>
          <Image 
            source={companyIcon}
            style = {{
              flex: 1,
              padding: 15,
              marginLeft: 10,
              marginRight: 15
            }}
            resizeMode = 'contain'
          />
      </View>
      <View style = {styles.headerWelcomeWrap}>
        <Text style = {styles.welcomeMessage} >
        </Text>
      </View>
      <View style = {styles.headerIconWrap}>
        <TouchableOpacity
          onPress={() => navigation.navigate('DrawerOpen')}
          style={styles.navBtn}>
          {drawerButton}
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = {
  headerWrapper: {
    flexDirection: 'row',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    paddingBottom: 5,
    backgroundColor: '#42c4db',
    shadowColor: 'black',
    shadowOpacity: .3,
    shadowRadius: 10,
    shadowOffset: {width: 0, height:1},
    elevation: 20,
    position:'relative',
    zIndex: 1,
    paddingHorizontal: 10,
    ...ifIphoneX({
      paddingTop: 35,
      paddingHorizontal: 15
    })
  },
  headerIconWrap: {
    flex: 20,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#42c4db',
  },
  navBtn: {
    padding:8
  },
  headerWelcomeWrap: {
    flex: 100,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#42c4db',
  },
  welcomeMessage: {
    color: 'white',
    fontWeight:'bold',
  },
}

export default Header