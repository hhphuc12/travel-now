import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

import thumbnail from '../../../images/thumbnail.png';

const { height, width } = Dimensions.get('window');

export default class ItemVertical extends Component {
    render() {
        const { wrapper, thumbnailStyle, textGroup, titleStyle, rateWrapper,
            addressStyle, tagStyle, distanceStyle, rateStyle } = styles;
        return (
            <View style={wrapper}>
                <Image source={thumbnail} style={thumbnailStyle} />
                <View style={textGroup}>
                    <Text style={titleStyle}>Cù Lao Chàm</Text>
                    <Text style={addressStyle}>Cù Lao Chàm Tân Hiệp Hội An</Text>
                    <Text style={tagStyle}>tham quan, du lich</Text>
                    <Text style={distanceStyle}>39,7 km</Text>
                </View>
                <View style={rateWrapper}>
                    <Text style={rateStyle}>4,7</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: height / 30,
        borderBottomWidth: 0.5,
        borderBottomColor: '#8693a8'
    },
    thumbnailStyle:
    {
        height: width / 4.5,
        width: width / 4.5
    },
    textGroup:
    {
        justifyContent: 'center'
    },
    titleStyle:
    {
        fontWeight: 'bold',
        fontSize: height / 40
    },
    addressStyle:
    {
        color: '#c1c1c1'
    },
    tagStyle:
    {
        color: '#fac917'
    },
    distanceStyle:
    {

    },
    rateStyle:
    {
        padding: height / 80,
        backgroundColor: '#00c9ff',
        color: 'white',
        borderRadius: height / 80,
        fontWeight: 'bold'
    },
    rateWrapper:
    {
        justifyContent: 'center'
    }
});