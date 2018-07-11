import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { ButtonGroup, Header } from 'react-native-elements'
import Navbar from './Navbar'

export default class Report extends React.Component {
  render() {
    return (
      <View>
        <Navbar text="Send Report" left={false} />
        <Text> Placeholder for Report</Text>
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
