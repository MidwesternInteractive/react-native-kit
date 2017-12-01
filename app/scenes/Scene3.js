import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions
} from 'react-native';
import LoggedIn from '../layouts/LoggedIn/index'
import * as Animatable from 'react-native-animatable';
var { height, width } = Dimensions.get('window')

class Scene3 extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render() {
    return (
        <ScrollView style ={styles.container}>
          <Animatable.View>
            <Text style ={styles.smallTitleText}>Glad to have you at the 3rd scene</Text>
          </Animatable.View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  smallTitleText:{
    marginHorizontal: 5,
    fontSize: 16,
    marginTop: 5,
    marginBottom: 10,
  }

});
export default LoggedIn(Scene3)