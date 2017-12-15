import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/Screen2Style'

class Screen2 extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }
  static navigationOptions = {
    tabBarLabel: 'Screen2',
  };

  handleButtonPress = () => {
    this.props.navigation.navigate('Screen1');
  };

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>Screen2 Container</Text>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen2)
