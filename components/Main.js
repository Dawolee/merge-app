import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Navbar } from './index'
import fire from './fire'
import Search from './Search'
import Settings from './Settings'
import Report from './Report'
import Icon from 'react-native-vector-icons/Ionicons'

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currentUser: null }
  }

  componentDidMount() {
    const { currentUser } = fire.auth()
    this.setState({ currentUser })
  }

  render() {
    const { currentUser } = this.state
    return (
      <View>
        <View>
          <Navbar text="Home" left={false} />
          <Text style={{ textAlign: 'center' }}>
            Welcome {currentUser && currentUser.displayName}!
          </Text>
          )
          <View style={styles.container}>
            <ScrollView>
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
            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
}

export default createMaterialBottomTabNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" color={tintColor} size={24} />
        )
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-search" color={tintColor} size={24} />
        )
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-settings" color={tintColor} size={24} />
        )
      }
    },
    Report: {
      screen: Report,
      navigationOptions: {
        tabBarLabel: 'Report',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-flag" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    initialRouteName: 'Main',
    activeTintColor: 'black',
    barStyle: { backgroundColor: 'white' }
  }
)

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
