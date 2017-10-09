import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet, ListView, Text } from 'react-native';

import RateView from '../share-components/rate-view';

const { height, width } = Dimensions.get('window');

export default class ItemListview extends Component {
    render() {
        const { imgSource, title } = this.props;
        const { item, thumb, titleStyle } = styles;
        return (
            <View style={item}>
                <Image style={thumb} source={imgSource} />
                <Text style={titleStyle}>
                    {title}
                </Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    item: {
        justifyContent: 'center',
        padding: width / 150,
        backgroundColor: 'white',
    },
    thumb: {
        width: width * 0.6,
        height: width * 0.6 * 375 / 540,
        borderRadius: width / 150
    },
    titleStyle: {
        flex: 1,
        paddingTop: 10,
        fontWeight: 'bold',
        color: 'black'
    }
});