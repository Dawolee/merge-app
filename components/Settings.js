import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import {
  Text,
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button
} from 'react-native-elements'
import Navbar from './Navbar'
import fire from './fire'
import firebase from 'firebase'

export default class Settings extends React.Component {
  state = {
    currentUser: null,
    email: '',
    password: '',
    licensePlate: null,
    username: null,
    newPassword: ''
  }

  componentDidMount() {
    const { currentUser } = fire.auth()
    this.setState({
      currentUser,
      email: currentUser.email,
      password: currentUser.password,
      username: currentUser.displayName
    })
  }

  reauthenticate = currentPassword => {
    var user = fire.auth().currentUser
    var cred = firebase.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    )
    return user.reauthenticateAndRetrieveDataWithCredential(cred)
  }

  changePassword = (currentPassword, newPassword) => {
    this.reauthenticate(currentPassword)
      .then(() => {
        let user = fire.auth().currentUser
        user
          .updatePassword(newPassword)
          .then(() => {
            console.log('Password updated!')
          })
          .catch(error => {
            console.log(error)
          })
      })
      .catch(error => {
        console.log(error)
      })
  }

  changeEmail = (currentPassword, newEmail) => {
    this.reauthenticate(currentPassword)
      .then(() => {
        let user = fire.auth().currentUser
        user
          .updateEmail(newEmail)
          .then(() => {
            console.log('Email updated!')
          })
          .catch(error => {
            console.log(error)
          })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <View>
        <Navbar text="My Settings" left={false} />
        <Text h2>Update Your Settings</Text>
        <FormLabel>Username</FormLabel>
        <FormInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Username"
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
          defaultValue={this.state.username}
        />
        <FormLabel>Email</FormLabel>
        <FormInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
          defaultValue={this.state.email}
        />
        <FormLabel>Current Password</FormLabel>
        <FormInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <FormLabel>New Password</FormLabel>
        <FormInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={newPassword => this.setState({ newPassword })}
          value={this.state.newPassword}
        />
        <Button
          title="Confirm Changes"
          onPress={() =>
            this.changePassword(this.state.password, this.state.newPassword)
          }
        />
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
