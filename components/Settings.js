import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import Navbar from './Navbar'

export default class Settings extends React.Component {
  render() {
    return (
      <View>
        <Navbar text="My Settings" left={false} />
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
        />
        <TextInput
          style={styles.textInput}
          secureTextEntry
          autoCapitalize="none"
          placeholder="Password"
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
