import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ListItem from './ListItem';

const listItems = (props) => {
    return (
        <View style={styles.listItems}>
            {
                props.places.map((place, i) => (
                    <ListItem key={i} placeName={place} />
                ))
            }
        </View>
    );
};


const styles = StyleSheet.create({
    listItems: {
        width: "100%"
    }
});

export default listItems;
