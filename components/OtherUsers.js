import React from 'react'
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Navbar } from './index'
import fire from './fire'

export default class OtherUsers extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currentUser: null }
  }

  componentDidMount() {
    // const { currentUser } = fire.auth()
    // this.setState({ currentUser })
  }

  render() {
    const { navigation } = this.props
    const { goBack } = navigation
    const username = navigation.getParam('username')
    console.log(username)
    const { currentUser } = this.state
    return (
      <View>
        <Navbar text="View Profile" left={goBack} />
        )
        <View style={styles.container}>
          <ScrollView>
            <Card image={require('../public/car.png')} title={username}>
              <Text style={{ marginBottom: 10 }}>
                Placeholder for where user's reviews show up
              </Text>
              <Button
                icon={<Icon name="code" color="#ffffff" />}
                backgroundColor="#03A9F4"
                buttonStyle={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0
                }}
                title="Leave Review"
              />
            </Card>
          </ScrollView>
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
