import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ButtonGroup, Header } from 'react-native-elements'
import Navbar from './Navbar'

export default class Search extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        {Navbar('Search', navigate)}
        <Text> Placeholder for Search</Text>
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
