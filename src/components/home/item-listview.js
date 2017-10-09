import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet, ListView, Text } from 'react-native';

import RateView from '../share-components/rate-view';

const { height, width } = Dimensions.get('window');

export default class ItemListview extends Component {
    render() {
        const { imgSource, title, numStar, numRate, distance, tag } = this.props;
        const { item, thumb, titleStyle, row, numRateStyle, rowTag, tagStyle, distanceStyle } = styles;
        return (
            <View style={item}>
                <Image style={thumb} source={imgSource} />
                <Text style={titleStyle}>
                    {title}
                </Text>
                <View style={row}>
                    <RateView numStar={numStar} />
                    <Text style={numRateStyle}>{numRate} đánh giá</Text>
                </View>
                <View style={rowTag}>
                    <Text style={tagStyle}>{tag}</Text>
                    <Text style={distanceStyle}>{distance} km</Text>
                </View>
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
    row:
    {
        flexDirection: 'row'
    },
    rowTag:
    {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    },
    numRateStyle:
    {
        fontSize: height / 50,
        paddingLeft: width / 50,
        paddingTop: -height / 100,
    },
    distanceStyle:
    {
        fontSize: height / 50
    },
    tagStyle:
    {
        fontSize: height / 50,
        color: '#fac917'
    }
});