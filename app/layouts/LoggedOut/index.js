import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Linking,
  AsyncStorage,
  StatusBar,
  WebView,
  
} from 'react-native'
// Packages
import { NavigationActions } from 'react-navigation'
import * as Animatable from 'react-native-animatable'
import update from 'immutability-helper';
import Modal from 'react-native-modal'
import { ifIphoneX } from 'react-native-iphone-x-helper'
// Images
const background = require('../../images/oldOffice.jpg')
const companyIcon = require('../../images/BlueMidwestLogo.png')
//Dimensions
const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

class LoggedOut extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isForgotPasswordModalVisible: false,
      auth: {
        username: '',
        password: '',
      },
      errorMessage: '',
      loginText: 'Log In',
      isLoggingIn: false,
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  showForgotPasswordModal = () => this.setState({ isForgotPasswordModalVisible: true })
  hideForgotPasswordModal = () => this.setState({ isForgotPasswordModalVisible: false })

  componentWillMount() {
    // User desires to log out remove auth on load.
    AsyncStorage.removeItem('auth')
  }

  handleChange(property, text) {
    const newState = update(this.state, {
      auth: {
        [property]: { $set: text }
      }
    })
    this.setState(newState);
  }

  handleLogin() {
    console.log('Handling Login')
    let emailPasswordErrror = 0
    if (this.state.auth.username.length === 0 || this.state.auth.password.length === 0) {
      emailPasswordErrror = 1;
    }
    if (emailPasswordErrror) {
      console.log('Failed')
      this.setState({
        loginText: 'Try Again...',
        errorMessage: 'Email and Password is required.'
      })
      //Make API call for authentication Here
      return 
    } else {
      console.log('Passed')
      { this.props.navigation.navigate('LoggedIn')}
      this.setState({
        isLoggingIn: true,
        loginText: "Logging In",
        isLoggingIn: false,
        loginText: 'Try Again...',
          })
        
    }
  }
  render() {
    const loggingIn =  (
        <TouchableOpacity 
        style = {styles.loggingInButton}>
          <Text style = {styles.loginText}>{this.state.loginText}</Text>
        </TouchableOpacity>
      )
    const logIn = (
      <TouchableOpacity
        onPress={this.handleLogin}
       style = {styles.logInButton}>
        <Text style ={styles.loginText}>{this.state.loginText}</Text>
      </TouchableOpacity>
      )

    return (
      <View style = {styles.container}>
        <StatusBar barStyle ='light-content'/>
        <Image
          source = {background}
          style = {styles.backgroundImageStyle}
        >
          <Animatable.View
            style = {styles.loginBoxStyle}
            animation = 'slideInUp'
            duration = {2000}
          >
             <Image 
              source = {companyIcon}
              style = {styles.logo}
              resizeMode = 'contain'
              />
            <View style = {styles.inputWrap}>
              <TextInput
                placeholder="E-Mail"
                autoCapitalize='none'
                style={styles.input}
                keyboardType = 'email-address'
                autoCorrect={false}
                value={this.state.auth.username}
                returnKeyType='next'
                returnKeyLabel='Next'
                spellCheck={false}
                enablesReturnKeyAutomatically={true}
                onChangeText={(text) => this.handleChange('username', text)}
                keyboardAppearance = 'light'
                placeholderTextColor = 'gray'
                selectionColor="#42c4db"
                color='black'
                underlineColorAndroid='transparent'
                onSubmitEditing={(event) => { 
                  this.refs.password.focus(); 
                }}
              />
            </View>  
            <View style = {styles.inputWrap}>   
              <TextInput
                ref='password'
                placeholder="Password"
                autoCapitalize='none'
                style={styles.input}
                secureTextEntry
                value={this.state.auth.password}
                onChangeText={(text) => this.handleChange('password', text)}
                keyboardAppearance = 'light'
                placeholderTextColor = 'gray'
                selectionColor="#42c4db"
                color='black'
                underlineColorAndroid="transparent"
                onSubmitEditing={this.handleLogin}
              />
            </View>
            <Animatable.Text 
              animation='pulse'
              iterationCount={3}
              duration={3500}
              style={styles.errorMessage}>
              {this.state.errorMessage}
            </Animatable.Text>

            {this.state.isLoggingIn ? loggingIn : logIn}
            <TouchableOpacity
              onPress={this.showForgotPasswordModal}
              >
              <Text style = {{color:'gray'}}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
            <Modal
              style={{flex:1, alignItems: 'center',}}
              isVisible={this.state.isForgotPasswordModalVisible}
              backdropColor={'#FFF'}
              backdropOpacity={.5}
              animationIn={'slideInUp'}
              animationOut={'slideOutDown'}
              animationInTiming={800}
              animationOutTiming={800}
              backdropTransitionInTiming={800}
              backdropTransitionOutTiming={800}
            >
              <View style = {styles.modalView}>
                <WebView
                  source={{uri: 'https://midwesterninteractive.com/'}}
                />
                <TouchableOpacity
                  onPress={this.hideForgotPasswordModal}
                  >
                  <View style={styles.backButton} >
                    <Text style={styles.buttonText}>Back</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Modal>
          </Animatable.View>
        </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  backgroundImageStyle:{
    flex:1,
    width: window.width,
    height: window.height,
    alignItems: 'center',
    justifyContent: 'center',
  },
   loader: {
      width: 25,
      height: 25,
      marginRight: 10,
      resizeMode: 'contain'
    },
  loginBoxStyle:{
    backgroundColor: 'rgba(255,255,255,0.85)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 290,
    borderRadius: 5,
    paddingBottom: 20,
  },
  logo: {
    width: 270,
    height: 100,
    marginBottom:-20,
    padding: 20,
    marginVertical: 15,
    marginBottom: 10
  },
  inputWrap:{
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingTop: 0,  
    height: 50,
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: 'transparent',
    color: '#fff',
    borderColor: '#FFF',  
  },
  button: {
    backgroundColor:"#cd6c4d",
    paddingVertical: 15,
    paddingHorizontal: 65,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row'
  },
  modalView:{
    height: window.height - 50, 
    width: window.width - 20,
    ...ifIphoneX({
      height: window.height - 100,
    })
  },
  backButton:{
    backgroundColor:"#FFF",
    paddingVertical: 15,
    paddingHorizontal: 65,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  loggingInButton:{
    padding: 5,
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
    backgroundColor: '#42c4db',
    borderRadius: 25,
    marginBottom: 15
  },
  logInButton:{
    padding: 5,
    width: 200,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
    backgroundColor: '#42c4db',
    marginBottom: 15
  },
  loginText:{
    color: '#FFF',
  },
  errorMessage: {
    color: '#DD4E40',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 15
  },
})

export default LoggedOut