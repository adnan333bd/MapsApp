import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';

export default class App extends Component {
  state = {
    places: [] //{key, value}
  };

  placeAddHandler = (place) => {
    this.setState(prevState => {
      let lastIndex = prevState.places.length;

      return {
        places: prevState.places.concat({
          key: (lastIndex).toString(),
          value: place
        })
      };
    });
  };
  onItemDeletedHandler = (key) => {

    this.setState(prevState => {
      return {
        places: prevState.places.filter(({k, value}) => {
          return k !== key;
        })
      };
    });
  }
  render() {


    return (
      <View style={styles.container} >
        <PlaceInput
          placeAdded={this.placeAddHandler}
        />
        <PlaceList
          onItemDeleted={this.onItemDeletedHandler}
          places={this.state.places} />
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
    alignItems: 'center'
  }
});
