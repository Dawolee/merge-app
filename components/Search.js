import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { SearchBar, Button, List, ListItem } from 'react-native-elements'
import Navbar from './Navbar'
import fire from './fire'
import car from '../public/car.png'

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      plates: [],
      search: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const { currentUser } = fire.auth()
    this.setState({ currentUser })
    let database = fire.database()
    let ref = database.ref('users')
    ref.on(
      'value',
      data => {
        let users = data.val()
        let licensePlates = Object.keys(users)
        let plates = licensePlates.map(plate => users[plate])
        this.setState({ plates })
      },
      err => console.log(err)
    )
  }

  handleChange(event) {
    this.setState({ search: event.toLowerCase() })
  }

  render() {
    let { plates, search, currentUser } = this.state
    let filteredPlates = plates.filter(
      plate => plate.email !== currentUser.email
    )
    let searchPlates = filteredPlates.filter(
      plate =>
        plate.email !== currentUser.email &&
        search.length > 0 &&
        plate.licensePlateNumber.toLowerCase().indexOf(search) > -1
    )
    const { navigate } = this.props.navigation
    return (
      <View>
        <Navbar text="Search" left={false} />
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
          <SearchBar
            onChangeText={this.handleChange}
            lightTheme={true}
            placeholder="Type Here..."
          />
          <View>
            {!search &&
              filteredPlates.map(plate => (
                <ListItem
                  roundAvatar
                  avatar={require('../public/car.png')}
                  key={plate.licensePlateNumber}
                  title={`username: ${plate.username}`}
                  subtitle={`plate #: ${plate.licensePlateNumber}`}
                  onPress={() =>
                    navigate('OtherUsers', {
                      username: plate.username
                    })
                  }
                />
              ))}
            {searchPlates.length &&
              searchPlates.map(plate => (
                <ListItem
                  roundAvatar
                  avatar={require('../public/car.png')}
                  key={plate.licensePlateNumber}
                  title={`username: ${plate.username}`}
                  subtitle={`plate #: ${plate.licensePlateNumber}`}
                  onPress={() =>
                    navigate('OtherUsers', {
                      username: plate.username
                    })
                  }
                />
              ))}
          </View>
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
{
  /* <View
                  key={plate.licensePlateNumber}
                  style={{ flexDirection: 'row' }}
                >
                  <Text>
                    <Text>Username: {plate.username}</Text>
                    {'\n'}
                    <Text>License #: {plate.licensePlateNumber}</Text>
                  </Text>
                  <Button
                    onPress={() =>
                      navigate('OtherUsers', {
                        username: plate.username
                      })
                    }
                    title="View Profile"
                  />
                </View> */
}
