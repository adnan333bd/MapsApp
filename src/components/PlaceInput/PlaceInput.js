import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class PlaceInputComponent extends Component {
    state = {
        placeName: ''
    };
    constructor(props) {
        super(props);
    }
    placeNameChanged = (value) => {
        this.setState({
            placeName: value
        });
    };
    submitPlace = () => {
        if (this.state.placeName.trim() !== '')
            this.props.placeAdded(this.state.placeName.trim());

        /* this.setState({
            placeName: ''
        }); */
    };
    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInputCommon}
                    placeholder="place name please"
                    value={this.state.placeName}
                    onChangeText={this.placeNameChanged} />
                <Button
                    style={styles.buttonCommon}
                    title="Add"
                    onPress={this.submitPlace} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    },
});

export default PlaceInputComponent;