import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ButtonGroup, Header } from 'react-native-elements'
import { widthPercentageToDP, heightPercentageToDP } from './DimensionsHelper'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedIndex: 1 }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex(selectedIndex) {
    const { fn } = this.props
    this.setState({ selectedIndex }, () => {
      if (selectedIndex === 0) {
        fn('Search')
      } else if (selectedIndex === 1) {
        fn('Main')
      } else if (selectedIndex === 2) {
        fn('Report')
      }
    })
  }

  render() {
    let { text, fn } = this.props
    const { selectedIndex } = this.state
    const buttons = ['Search', 'Home', 'Report']
    return (
      <View>
        <Header
          leftComponent={{
            icon: 'face',
            color: '#fff',
            onPress: () => fn('Settings')
          }}
          centerComponent={{ text: text, style: { color: '#fff' } }}
          rightComponent={{
            icon: 'home',
            color: '#fff',
            onPress: () => fn('Main')
          }}
        />
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{
            height: heightPercentageToDP('5%')
          }}
        />
      </View>
    )
  }
}
