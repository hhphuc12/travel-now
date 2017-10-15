import React, { Component } from 'react';
import {
    View, Image, Dimensions, StyleSheet,
    ListView, Text, TouchableOpacity, FlatList
} from 'react-native';

import ItemListview from './item-listview';

const { height, width } = Dimensions.get('window');

const data = [
    { id: 1, title: 'Lorem Ipsum', imgSource: require('../../images/thumbnail.png') },
    { id: 2, title: 'Lorem Ipsum', imgSource: require('../../images/thumbnail.png') },
    { id: 3, title: 'Lorem Ipsum', imgSource: require('../../images/thumbnail.png') },
    { id: 4, title: 'Lorem Ipsum', imgSource: require('../../images/thumbnail.png') },
    { id: 5, title: 'Lorem Ipsum', imgSource: require('../../images/thumbnail.png') },
    { id: 6, title: 'Lorem Ipsum', imgSource: require('../../images/thumbnail.png') }
]

export default class MyListView extends Component {

    render() {
        const { listTitle } = this.props;
        const { wrapper, row, title, viewMore } = styles;
        return (
            <View style={wrapper}>
                <Text style={title}>{listTitle}</Text>
                <FlatList
                    horizontal
                    data={data}
                    renderItem={({ item }) => {
                        return <ItemListview
                            title={item.title}
                            imgSource={item.imgSource}
                            navigator={this.props.navigator} />
                    }}
                    keyExtractor={(item, index) => item.id}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
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