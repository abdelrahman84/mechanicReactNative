import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'
import Firebase from '../config/Firebase'

class Profile extends React.Component {
	handleSignout = () => {
		Firebase.auth().signOut()
		this.props.navigation.navigate('Login')
	}

	render() {
		return (
			<View style={styles.container}>
				<Text h1 style={styles.header}>Profile Screen</Text>
				<Text h2 style={styles.header}>Welcome {this.props.user.userName}</Text>
				<Button title='Logout' onPress={this.handleSignout} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#808080',
		alignItems: 'center',
		justifyContent: 'center'
	},
	header: {
		padding: 10,
		

	}
})

const mapStateToProps = state => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(Profile)