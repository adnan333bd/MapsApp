import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import ListItems from './src/components/ListItem/ListItems';
import PlaceInput from './src/components/PlaceInput/PlaceInput';

export default class App extends Component {
  state = {    
    places: []
  };
  
  placeAddHandler = (place) => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(place)
      };
    });
  };
  render() {
   

    return (
      <View style={styles.container} >
        <PlaceInput 
          placeAdded={this.placeAddHandler}
        />
        <ListItems places={this.state.places} />
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
