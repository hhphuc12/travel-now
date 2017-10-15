import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet, ListView, Text, TouchableOpacity } from 'react-native';

import RateView from '../share-components/rate-view';

const { height, width } = Dimensions.get('window');

export default class ItemListview extends Component {
    gotoDetails() {
        const { navigator } = this.props;
        navigator.push({ name: 'other_details' });
    }

    render() {
        const { imgSource, title } = this.props;
        const { item, thumb, titleStyle } = styles;
        return (
            <TouchableOpacity style={item} onPress={this.gotoDetails.bind(this)} >
                <Image style={thumb} source={imgSource} />
                <Text style={titleStyle}>
                    {title}
                </Text>
            </TouchableOpacity>
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