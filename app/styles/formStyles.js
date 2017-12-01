import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';

const midwestBlue = '#42c4db'

export default formStyles =  StyleSheet.create({
	inputWrap:{
		flexDirection: 'row',
		marginHorizontal: 20,
		paddingTop: 0,  
		height: 50,
		backgroundColor: "transparent",
		borderBottomWidth: 1,
		borderColor: midwestBlue,
		marginBottom: 20,
		alignItems: 'center'
	},
	input:{
		flex: 1,
		backgroundColor: 'transparent',
		color: 'black',
		//borderBottomWidth:1,
		//borderColor: midwestBlue,
		marginHorizontal: 15,
		height:25,
		//fontFamily: "Roboto"
	},
	multiInputWrap:{
		marginHorizontal: 20,
		height: 75,  
		backgroundColor: "transparent",
		borderWidth: 1,
		// alignItems: 'center',
		// justifyContent: 'center',
		borderColor: midwestBlue,
		marginBottom: 20,
	},
	submitButton:{
		borderColor: 'gray',
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 5,
		marginTop: 10,
		marginHorizontal: 20
	},
	h1:{
		fontSize: 35,
		color: '#DD4E40',
		fontWeight: '800',
		alignSelf: 'center',

	},
	loginText:{
		fontSize: 16,
		color: 'black',
		padding: 10,
		textAlign: 'center'
	},
	inputIcon:{

	},
	// Tab Nav Scene Specific Styles
	tabNavContentContainer: {
		flex: 1,
		marginBottom: (Platform.OS === 'ios') ? 50 : 54,
	}
	});