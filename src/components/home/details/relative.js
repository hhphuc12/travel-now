import React, { Component } from 'react';
import {
    View, Image, Dimensions, StyleSheet,
    ListView, Text, TouchableOpacity, FlatList
} from 'react-native';

import ItemListview from './relative-item';
import { api } from '../../utils';

const { height, width } = Dimensions.get('window');

export default class MyListView extends Component {
    render() {
        const { navigator, data } = this.props;
        const { wrapper, title, viewMore } = styles;
        return (
            <FlatList
                horizontal
                data={data}
                renderItem={({ item }) => {
                    return <ItemListview
                        id={item._id}
                        place_name={item.place_name}
                        thumbnail={item.thumbnail}
                        navigator={navigator} />
                }}
                keyExtractor={(item, index) => item.id}
                showsHorizontalScrollIndicator={false}
            />
        );
    }
}

var styles = StyleSheet.create({
    wrapper:
        {
            backgroundColor: 'white',
            paddingTop: height / 40,
            paddingBottom: height / 60
        },
    row:
        {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: width / 50
        },
    title:
        {
            fontWeight: 'bold',
            color: 'black',
            fontSize: height / 38,
            padding: width / 50
        },
    viewMore:
        {
            fontSize: height / 45
        }
});