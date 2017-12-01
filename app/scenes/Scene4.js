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
import * as Animatable from 'react-native-animatable';
import LoggedIn from '../layouts/LoggedIn/index'
var { height, width } = Dimensions.get('window')

class Scene4 extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render() {
    return (
        <ScrollView style ={styles.container}>
          <Animatable.View>
            <View style={styles.mainView}>
              <Text style ={styles.titleText}>Glad to have you at the 4th scene</Text>
            </View>
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
  titleText:{
    marginHorizontal: 5,
    fontSize: 16,
    marginTop: 5,
    color: '#DD4E40',
    marginBottom: 10,
  },

});
export default LoggedIn(Scene4)