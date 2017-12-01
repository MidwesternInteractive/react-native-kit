import React from 'react'
import {
    View, 
    Image, 
    StyleSheet,
    TouchableOpacity,
    Text
} 
from 'react-native'
// Packages
import { DrawerItems, NavigationActions } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import LoggedInContainer from './LoggedInContainer'
import Communications from 'react-native-communications'
import { ifIphoneX } from 'react-native-iphone-x-helper'

function LogOut(){

}

const MainNavigation = (props) => {
    console.log('navProps', props)
    const items = props.items.filter(item => item.key.indexOf('Hidden') < 0)

    // Images

    // Override items in the newProps object.
    newProps = {
        ...props,
        items
    }

    return (
        <View style = {styles.mainDrawerView}>
            <View style = {styles.contactView}>
                <TouchableOpacity
                    style = {styles.contactButtonView} 
                    onPress={() => Communications.phonecall('417-208-9701', true)}>
                    <View>
                        <Icon name="md-call" size={25} color='#FFF' style = {styles.drawerContactIcon}/>
                    </View> 
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.contactButtonView}
                    onPress={() => Communications.email(['hello@midwesterninteractive.com'],null,null,'My Subject','My body text')}>
                    <View>
                        <Icon name="ios-mail" size={25} color = '#FFF' style = {styles.drawerContactIcon} /> 
                    </View>
                </TouchableOpacity>
            </View>
            <View style = {styles.drawerItemView}>
                <DrawerItems {...newProps} />
            </View>
            <View style = {styles.drawerPhotoView}>
                <Image 
                  
                    style = {styles.lawStoreDrawerLogo}
                />
            </View>
        </View>
    )
}

//Styles for Drawer
const styles = StyleSheet.create({
    mainDrawerView: {
        flex: 1,
        shadowOpacity: .2,
        shadowRadius: 10,
        shadowOffset: {width: 0, height:1},
        elevation: 40,
    },
    contactView: {
        flexDirection: 'row',
        backgroundColor: '#42c4db',
        borderTopWidth: 20,
        borderColor: '#42c4db',
        flex: 1,
        marginBottom: 0,
        paddingBottom: 0,
        ...ifIphoneX({
            borderTopWidth:32
        })
    },
    contactButtonView: {
        flex: 1,
        borderRightWidth: 1,
        borderColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        height: 53
    },
    drawerContactIcon: {
        backgroundColor: 'transparent'
    },
    drawerItemView: {
        flex: 10,
        marginTop: 0,
        justifyContent: 'flex-start',
    },
    drawerPhotoView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    logoutView:{
        marginHorizontal: 18,
        marginTop: 2,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    matchDrawerItem:{
        justifyContent: 'center', 
        fontSize: 13,
        fontWeight: '500', 
        color: 'darkgray',
        marginBottom: 3
    },
    drawerIcons: {
        marginRight: 33,
    }
})

export default MainNavigation