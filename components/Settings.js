import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP, heightPercentageToDP } from './DimensionsHelper'
import Navbar from './Navbar'

export default class Settings extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        {Navbar('My Settings', navigate)}
        <Text> Placeholder for settings</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
