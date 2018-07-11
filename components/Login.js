import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import fire from './fire'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errorMessage: null,
      type: 'login',
      licensePlate: null
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
      .then(user =>
        db.ref('users').push({
          email: this.state.email,
          licensePlateNumber: this.state.licensePlate
        })
      )
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.type === 'login' && <Text>Login</Text>}
        {this.state.type === 'signup' && <Text>Sign Up</Text>}
        {this.state.errorMessage && (
          <Text style={{ color: 'red' }}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        {this.state.type === 'signup' && (
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="License Plate Number"
            onChangeText={licensePlate => this.setState({ licensePlate })}
            value={this.state.licensePlate}
          />
        )}
        {this.state.type === 'login' && (
          <Text>
            <Button title="Login" onPress={this.handleLogin} />
            <Button
              title="Don't have an account? Sign Up"
              onPress={() => this.setState({ type: 'signup' })}
            />
          </Text>
        )}
        {this.state.type === 'signup' && (
          <Text>
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
