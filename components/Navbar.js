import React, { Component } from 'react'
import { View } from 'react-native'
import { Header } from 'react-native-elements'
import fire from './fire'
import Icon from 'react-native-vector-icons/Ionicons'

export default class Navbar extends Component {
  handleLogout = () => {
    fire
      .auth()
      .signOut()
      .then(() => this.props.navigation.navigate('Splash'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    let { text } = this.props
    return (
      <View>
        <Header
          style={{ marginTop: 5 }}
          centerComponent={{
            text: text,
            style: { color: '#fff', fontSize: 16 }
          }}
          rightComponent={
            <Icon name="ios-log-out" size={24} onPress={this.handleLogout} />
          }
        />
      </View>
    )
  }
}
