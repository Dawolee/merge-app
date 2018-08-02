import React from 'react'
import { StyleSheet, TextInput, View, Button, Image } from 'react-native'
import {
  Text,
  FormLabel,
  FormInput,
  FormValidationMessage,
  Avatar
} from 'react-native-elements'
import fire from './fire'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errorMessage: null,
      type: 'login'
    }
  }

  handleLogin = () => {
    const { email, password } = this.state
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  handleSignUp = () => {
    let db = fire.database()

    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('SetDisplayName'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.center}>
          {this.state.type === 'login' && <Text h1>Login</Text>}
          {this.state.type === 'signup' && <Text h1>Sign Up</Text>}
        </View>
        <FormLabel>Email</FormLabel>
        <FormInput
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          secureTextEntry
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        {this.state.errorMessage && (
          <FormValidationMessage style={{ color: 'red' }}>
            {this.state.errorMessage}
          </FormValidationMessage>
        )}
        {this.state.type === 'login' && (
          <Text h1>
            <Button title="Login" onPress={this.handleLogin} />
            <Button
              title="Don't have an account? Sign Up"
              onPress={() => this.setState({ type: 'signup' })}
            />
          </Text>
        )}
        {this.state.type === 'signup' && (
          <Text h1>
            <Button title="Sign Up" onPress={this.handleSignUp} />
            <Button
              title="Already have an account? Login"
              onPress={() => this.setState({ type: 'login' })}
            />
          </Text>
        )}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  },
  center: {}
})
