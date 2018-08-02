import React from 'react'
import { StyleSheet, TextInput, View, Image } from 'react-native'
import {
  Text,
  FormLabel,
  FormInput,
  FormValidationMessage,
  Avatar,
  Button
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
    let title = this.state.type === 'login' ? 'Login' : 'Sign Up'
    let subTitle =
      this.state.type === 'login'
        ? "Don't have an account? Sign Up"
        : 'Already have an account? Login'
    let fn = this.state.type === 'login' ? this.handleLogin : this.handleSignUp
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
        <Button title={title} onPress={fn} />
        <Button
          title={subTitle}
          onPress={() => {
            if (this.state.type === 'login') {
              this.setState({ type: 'signup' })
            } else {
              this.setState({ type: 'login' })
            }
          }}
        />
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
  button: {
    width: 100
  }
})
