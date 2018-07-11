import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { ButtonGroup, Header, SearchBar } from 'react-native-elements'
import Navbar from './Navbar'

export default class Search extends React.Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Navbar fn={navigate} text="Search" />
        <View style={styles.search}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              marginTop: 10,
              marginBottom: 10
            }}
          >
            Search for License Plates
          </Text>
          <SearchBar lightTheme={true} placeholder="Type Here..." />
        </View>
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
  search: {
    width: '100%'
  }
})
