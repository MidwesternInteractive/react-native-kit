import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions
} from 'react-native';
import Scene1 from './Scene1'
import LoggedIn from '../layouts/LoggedIn/index'
import LayoutContainer from '../layouts/LoggedIn/index'
import { NavigationActions } from 'react-navigation'

import * as Animatable from 'react-native-animatable';
import formStyles from '../styles/formStyles'

const MidwestOffice = require('../images/staffPic.jpg')
const midwestwithText = require('../images/midwestText.png')

var { height, width } = Dimensions.get('window')

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
   
  }
  render(props) {
    const HiddenNavigator = (props) => {
    const NavigatorWithTabs = NavigationActions.navigate({
    routeName: 'HiddenLoggedInContainer',
    })
  }
    return (
          <Image
            style={styles.backgroundImage}
            source={MidwestOffice}
          >
            <Animatable.View
              animation='slideInLeft'
              duration={1000}
              style={styles.overlay}
            >
            <Image
              resizeMode='cover'
              style={styles.logo}
              source={midwestwithText}
            />
            </Animatable.View>
            <Animatable.View
              animation='slideInUp'
              duration={1000} 
              style={styles.contentForDashbaordView}
            >
              <Text
              style={formStyles.h1}>
              Our Team
              </Text>
            </Animatable.View>
          </Image>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage:{
    flex:1,
    height: height,
    width: width
  },
  overlay:{
    flex:1,
    backgroundColor: 'rgba(66, 196, 219, .8)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    flex:1,
    height: 400,
    width: 150,
    opacity: 1, 
    // transform:[{scale: 0.90}],
  },
  contentForDashbaordView:{
    flex:2,
    backgroundColor: '#FFF'
  },
  livePeopleView:{
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  topSpacerView:{
    marginBottom: 10,
    marginHorizontal: 5,
    padding: 5,
  },
  spacerView:{
    marginBottom: 10,
    marginHorizontal: 5,
    padding: 5,
    borderColor: 'darkgray'
  },
  smallTitleText:{
    marginHorizontal: 5,
    fontSize: 16,
    marginTop: 5,
    marginBottom: 10,
  }

});
export default LoggedIn(Dashboard)