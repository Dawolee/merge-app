import { createStackNavigator } from 'react-navigation'
import {
  Main,
  Login,
  Splash,
  Settings,
  Report,
  Search,
  Navbar,
  OtherUsers,
  SetDisplayName
} from './components'

const RootNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: null
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    SetDisplayName: {
      screen: SetDisplayName,
      navigationOptions: {
        header: null
      }
    },
    Main: {
      screen: Main,
      navigationOptions: {
        header: null
      }
    },
    Report: {
      screen: Report,
      navigationOptions: {
        header: null
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        header: null
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        header: null
      }
    },
    Navbar: {
      screen: Navbar,
      navigationOptions: {
        header: null
      }
    },
    OtherUsers: {
      screen: OtherUsers,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Splash'
  },
  {
    headerMode: 'screen'
  }
)

export default RootNavigator
