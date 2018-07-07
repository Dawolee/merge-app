import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { widthPercentageToDP, heightPercentageToDP } from './DimensionsHelper'
import Navbar from './Navbar'

export default class Settings extends React.Component {
  render() {
    const { navigate, goBack } = this.props.navigation
    return (
      <View>
        <Navbar text="My Settings" fn={navigate} />
        <Button title="Go Back" onPress={() => goBack()} />
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
