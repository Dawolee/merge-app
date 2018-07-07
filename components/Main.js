import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native'
import { ButtonGroup, Header } from 'react-native-elements'
import fire from './fire'
import Navbar from './Navbar'
import { widthPercentageToDP, heightPercentageToDP } from './DimensionsHelper'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currentUser: null, selectedIndex: 1 }
  }

  handleLogout = () => {
    fire
      .auth()
      .signOut()
      .then(() => this.props.navigation.navigate('Splash'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  componentDidMount() {
    const { currentUser } = fire.auth()
    this.setState({ currentUser })
  }

  render() {
    const { currentUser } = this.state
    const { navigate } = this.props.navigation
    return (
      <View>
        <Navbar text="My Home" fn={navigate} />
        <View>
          <Text>Hi {currentUser && currentUser.email}!</Text>
          )
          <Button title="Log Out" onPress={this.handleLogout} />
          <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.box}>Speeding</Text>
              <Text style={styles.box}>Bad Parking</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.box}>Too Slow</Text>
              <Text style={styles.box}>Erratic</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.box}>Texting</Text>
              <Text style={styles.box}>Red Lights / Stop Signs</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: 120,
    height: 120,
    fontSize: 15,
    backgroundColor: 'grey',
    margin: '5%',
    textAlign: 'center'
  }
})
