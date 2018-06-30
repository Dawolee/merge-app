import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ButtonGroup, Header } from 'react-native-elements'
import { widthPercentageToDP, heightPercentageToDP } from './DimensionsHelper'

export default function Navbar(text, fn) {
  return (
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
  )
}
