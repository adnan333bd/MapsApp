import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './src/components/ListItem/ListItem';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = {
    placeName: '',
    places: []
  };
  placeNameChangedHandler = (value) => {
    this.setState({
      placeName: value
    });
  };
  placeSubmitHandler = () => {
    if (this.state.placeName.trim() == "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };
  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <ListItem key={i} placeName={place}  />
    ));

    return (
      <View style={styles.container} >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInputCommon}
            placeholder="place name please"
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler} />
          <Button style={styles.buttonCommon} title="Add" onPress={this.placeSubmitHandler} />
        </View>
        <View>
          {placesOutput}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: '#eee'
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInputCommon: {
    width: '70%',
    //backgroundColor: '#bbb'
  },
  buttonCommon: {
    width: '30%',
    //backgroundColor: '#999'
  }

});
