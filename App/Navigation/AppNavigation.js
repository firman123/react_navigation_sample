import { StackNavigator, TabNavigator } from 'react-navigation'
import Screen2 from '../Containers/Screen2'
import Screen1 from '../Containers/Screen1'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

const tabNav = TabNavigator({
  Tab1: {screen: Screen1},
  Tab2: {screen: Screen2}
})

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: tabNav }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
