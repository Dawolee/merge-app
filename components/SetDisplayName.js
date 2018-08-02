import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import fire from './fire'

export default class SetDisplayName extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      email: '',
      errorMessage: null,
      type: 'login',
      licensePlate: null,
      username: null
    }
  }

  handleSignUp = () => {
    const { currentUser } = fire.auth()
    let db = fire.database()
    this.setState({ currentUser, email: currentUser.email }, () => {
      if (this.state.username) {
        currentUser
          .updateProfile({
            displayName: this.state.username
          })
          .then(() => {
            db.ref('users').push({
              email: this.state.email,
              licensePlateNumber: this.state.licensePlate,
              username: this.state.username
            })
            this.props.navigation.navigate('Main')
          })
          .catch(error => this.setState({ errorMessage: error.message }))
      } else {
        this.setState({ errorMessage: 'Enter a Username!' })
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Set your Username here!</Text>
        {this.state.errorMessage && (
          <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Username"
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
        />
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="License Plate Number"
          onChangeText={licensePlate => this.setState({ licensePlate })}
          value={this.state.licensePlate}
        />
        <Text>
          <Button title="Continue" onPress={this.handleSignUp} />
        </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})
