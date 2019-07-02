import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import Firebase from '../config/Firebase'

class Profile extends React.Component {
	state = {
		currentKilos: 0
	}


	handleSignout = () => {
		Firebase.auth().signOut()
		this.props.navigation.navigate('Login')
	}

	render() {
		return (
			<View style={styles.container}>
				<Text h1 style={styles.header}>Profile Screen</Text>
				<Text h2 style={styles.header}>Welcome {this.props.user.userName}</Text>

				<Text h3 style={styles.header}>Current Kilos {this.state.currentKilos}</Text>

				<TextInput
				    keyboardType="numeric"
					style={styles.inputBox}
					value={`${this.state.currentKilos}`}
                    onChangeText={currentKilos => this.setState({ currentKilos })}
                    placeholder='current Kilos'
                    />

			

				<TouchableOpacity style={styles.button} onPress={this.handleSignout}>
					<Text style={styles.buttonText}>Logout</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#808080',
		alignItems: 'center'
	},
	header: {
		padding: 30,

	},
	button: {
		height: 50,
		backgroundColor: '#1E90FF',
		position: 'absolute',
		bottom: 0.5,
		marginTop: 30,
		marginBottom: 20,
		paddingVertical: 5,
		alignItems: 'center',
		borderRadius: 5,
		width: 200
	},
	buttonText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#fff',

	},
	inputBox: {
        width: '50%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
		textAlign: 'center'
	}
})

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Profile)