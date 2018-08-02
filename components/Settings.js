import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from 'react-native-elements'
import Navbar from './Navbar'
import fire from './fire'

export default class Settings extends React.Component {
  state = {
    currentUser: null,
    email: '',
    password: '',
    licensePlate: null,
    username: null
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

  render() {
    return (
      <View>
        <Navbar text="My Settings" left={false} />
        <Text>Update Your Settings</Text>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Username"
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
          defaultValue={this.state.username}
        />
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
          defaultValue={this.state.email}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          defaultValue={this.state.password}
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
