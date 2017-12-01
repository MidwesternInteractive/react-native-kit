import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
  WebView,
  KeyboardAvoidingView
} from 'react-native';
import LayoutContainer from '../layouts/LoggedIn/index'
import * as Animatable from 'react-native-animatable';
import formStyles from '../styles/formStyles'
var { height, width } = Dimensions.get('window')

class Scene2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      company: '',
      descrption: '',
      showEmail: false,
      showCompany: false,
      showDescription: false,
    }
  }
  render() {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text
              style={formStyles.h1}>
              Let's Work Together
            </Text>
          <View style ={styles.formContainer}>
            <View>
              <Animatable.View
                style={formStyles.inputWrap}
                animation='slideInUp'
                duarion={2000}
              >
                <TextInput
                  autoCapitalize="none"
                  value= {this.state.name}
                  onChangeText={(name) => this.setState({name:name})}
                  style={formStyles.input}
                  keyboardType = 'default'
                  placeholder='Name'
                  autoCorrect={false}
                  returnKeyType='next'
                  returnKeyLabel='Next'
                  spellCheck={false}
                  enablesReturnKeyAutomatically={true}
                  keyboardAppearance = 'light'
                  placeholderTextColor = 'lightgray'
                  selectionColor="#42c4db"
                  underlineColorAndroid='transparent'
                  onSubmitEditing={()=> this.setState({showEmail:true})} 
                />
              </Animatable.View>
              </View>
              {this.state.showEmail &&
              <Animatable.View
                style={formStyles.inputWrap}
                animation='slideInUp'
                duarion={2000}
              >
              <TextInput
                autoCapitalize="none"
                value= {this.state.email}
                onChangeText={(email) => this.setState({email:email})}
                style={formStyles.input}
                placeholder= "E-Mail"
                keyboardType = 'default'
                autoCorrect={false}
                returnKeyType='next'
                returnKeyLabel='Next'
                spellCheck={false}
                enablesReturnKeyAutomatically={true}
                keyboardAppearance = 'light'
                placeholderTextColor = 'lightgray'
                selectionColor="#42c4db"
                underlineColorAndroid='transparent'
                onSubmitEditing={()=> this.setState({showCompany:true})} 
              />
            </Animatable.View>
              }
              {this.state.showCompany && 

              <Animatable.View
                style={formStyles.inputWrap}
                animation='slideInUp'
                duarion={2000}
            >
              <TextInput
                autoCapitalize="none"
                value= {this.state.company}
                onChangeText={(company) => this.setState({company:company})}
                style={formStyles.input}
                keyboardType = 'default'
                placeholder='Company'
                autoCorrect={false}
                returnKeyType='next'
                returnKeyLabel='Next'
                spellCheck={false}
                enablesReturnKeyAutomatically={true}
                keyboardAppearance = 'light'
                placeholderTextColor = 'lightgray'
                selectionColor="#42c4db"
                underlineColorAndroid='transparent'
                onSubmitEditing={()=> this.setState({showDescription:true})} 
              />
            </Animatable.View>
              }
              {this.state.showDescription && 
            <View>
              <Animatable.View
                style={formStyles.multiInputWrap}
                animation='slideInUp'
                duarion={2000}
              >
                <TextInput
                  autoCapitalize="none"
                  multiline={true}
                  value= {this.state.descrption}
                  onChangeText={(descrption) => this.setState({descrption:descrption})}
                  style={formStyles.input}
                  keyboardType = 'default'
                  fontSize = {16}
                  placeholder='Descrption'
                  autoCorrect={false}
                  returnKeyType='next'
                  returnKeyLabel='Next'
                  spellCheck={false}
                  enablesReturnKeyAutomatically={true}
                  keyboardAppearance = 'light'
                  placeholderTextColor = 'lightgray'
                  selectionColor="#42c4db"
                  underlineColorAndroid='transparent'
                  onSubmitEditing={()=> this.setState({showSubmit:true})} 
                />
              </Animatable.View>
              <TouchableOpacity>
              <Animatable.View
                animation='slideInUp'
                duration={3000}
                style={formStyles.submitButton}
              >
                  <Text
                    style={styles.submitButtonText}>
                    Submit
                  </Text>
              </Animatable.View>
              </TouchableOpacity>
            </View>
              }
          </View>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingVertical: 30,
  },
  formContainer:{
    flex:1,
    marginTop:45,
    marginHorizontal: 40,
    justifyContent: 'center'
  },
  submitButtonText:{
    color: 'gray',
    fontWeight: '700'
  },
  detailText:{
    color: 'lightgray'
  },

});
export default LayoutContainer(Scene2)