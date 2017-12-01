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
  Image
} from 'react-native';
import LoggedIn from '../layouts/LoggedIn/index'
import * as Animatable from 'react-native-animatable';

//Images
const raphaHouse = require('../images/rapha-house.gif') 
const lokDown = require('../images/ld.gif')
const joplinLand = require('../images/joplin-landscaping.gif')


var { height, width } = Dimensions.get('window')

class Scene1 extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render() {
    return (
        <ScrollView style ={styles.container}>
          <Animatable.View
            style={styles.caseStudyCard}
            animation='slideInLeft'
            duration={1500}
          >
           <Text 
              style ={styles.smallTitleText}>
              Rapha House
            </Text>
          
            <Image
              style={styles.showcaseImage}
              source = {raphaHouse}
            />
             
            <Text style ={styles.description}>
              Rapha House is a non-profit that rescues girls out of human trafficking, 
              and when they came to Midwestern they wanted a web solution that gave them a 
              platform to spread awareness and share news of their efforts. They also wanted to 
              sell their many products and be able to tell their story of rescue in a creative
              and innovative way. Midwestern met with Rapha House and established and 
              executed the goals and objectives of Rapha House.
            </Text>
          </Animatable.View>
          <Animatable.View
            style={styles.caseStudyCard}
            animation='slideInRight'
            duration={3000}
          >
          <Text 
              style ={styles.smallTitleText}>
              Lokdown
            </Text>
            <Image
              style={styles.showcaseImage}
              source = {lokDown}
            />
            
            <Text style ={styles.description}>
              LOKDOWN is an emergency communication tool that was build to aid school 
              districts,
              and first emergency responders in the event of an emergency crisis. 
              This cloud based software was developed to send notifications to teachers 
              and need to know staff about an emergency situation. Not only does it 
              notify users via text and email. It allows people inside the walls of the 
              crisis to communicate with the emergency responders outside walls.
            </Text>
          </Animatable.View>
          <Animatable.View
            style={styles.caseStudyCard}
            animation='slideInRight'
            duration={3000}
          >
            <Text 
              style ={styles.smallTitleText}>
              SS Custom Landscaping & Dirtwork
            </Text>

            <Image
              style={styles.showcaseImage}
              source = {joplinLand}
            />
            <Text style ={styles.description}>
              SS Custom Landscaping & Dirtwork came to Midwestern with goals 
              for a complete design and development of the company’s website. 
              They needed a site that would be viewable on any device. 
              They also had specific Search Engine Optimization goals to increase their 
              ranking in search engine results
            </Text>
          </Animatable.View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingVertical: 20,
    paddingHorizontal: 5,
    paddingBottom:25
  },
  smallTitleText:{
    fontSize: 35,
    marginTop: 10,
    color: '#DD4E40',
    fontWeight: '700',
    marginBottom: 15,
  },
  description:{
    fontSize: 20, 
    marginTop: 5,
    marginBottom: 15,
    marginHorizontal: 5,
  },
  caseStudyCard:{
    borderBottomWidth: 1,
    marginVertical: 20,
    marginHorizontal: 15,
    borderColor: 'lightgray'
  },
  showcaseImage:{
    resizeMode: 'contain',
    alignSelf:'center',
    height: 220,
    marginBottom:15
  },

});
export default LoggedIn(Scene1)