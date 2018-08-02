import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { Button } from 'react-native-elements'
import mergePicture from '../public/merge-placeholder.jpg'
import fire from './fire'

export default class Splash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: 'loading'
    }
  }

  componentDidMount() {
    fire.auth().onAuthStateChanged(user => {
      console.log('SUUSUSU', user)
      if (user) {
        this.setState({ currentUser: true })
      } else {
        this.setState({ currentUser: null }, () => {
          this.props.navigation.navigate('Splash')
        })
      }
    })
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <ImageBackground
        source={mergePicture}
        style={{ width: '100%', height: '100%' }}
      >
        <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 50 }}>
          MERGE
        </Text>
        <View style={styles.container}>
          {this.state.currentUser === 'loading' && <Text>Loading...</Text>}
          {this.state.currentUser !== 'loading' && (
            <Button
              onPress={() =>
                navigate(this.state.currentUser ? 'Main' : 'Login')
              }
              title="Get Started"
            />
          )}
        </View>
      </ImageBackground>
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
