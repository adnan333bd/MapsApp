import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
  'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = {
    placeName: ''
  };
  placeNameChangedHandler = (value) => {
    this.setState({
      placeName: value
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Place Name</Text>
        <TextInput
          style={{ width: 200, borderColor: 'gray', borderWidth: 1}}
          placeholder="place name please"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler} />
        <Text>Date</Text>
        <TextInput
          style={{ width: 200, borderColor: 'gray', borderWidth: 1}}
          placeholder="place name please"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
