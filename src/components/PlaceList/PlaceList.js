import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem';

const placeList = (props) => {  
    return (
        <FlatList
            style={styles.listItems}
            data={props.places}
            renderItem={({ key, value }) => {
                return (
                    <ListItem
                        placeName={value}
                        onItemPressed={() => props.onItemDeleted(key)}
                    />
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    listItems: {
        width: "100%"
    }
});

export default placeList;
