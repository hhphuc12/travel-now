import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export default class ItemVertical extends Component {
    render() {
        const { wrapper, thumbnailStyle, textGroup, titleStyle, rateWrapper,
            addressStyle, tagStyle, distanceStyle, rateStyle, row } = styles;
            let tmp = this.props.address;
        let address = tmp < 30 ? tmp : tmp.substring(0, 30) + '...';
        return (
            <View style={wrapper}>
                <View style={row}>
                    <Image source={{uri: this.props.thumbnail }} style={thumbnailStyle} />
                    <View style={textGroup}>
                        <Text style={titleStyle}>{this.props.name}</Text>
                        <Text style={addressStyle}>{address}</Text>
                        <Text style={tagStyle}>{this.props.tag}</Text>
                        <Text style={distanceStyle}>39,7 km</Text>
                    </View>
                </View>
                <View style={rateWrapper}>
                    <Text style={rateStyle}>{this.props.numStar}</Text>
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
        padding: height / 50,
        borderBottomWidth: 0.5,
        borderBottomColor: '#8693a8'
    },
    row:
    {
        flexDirection: 'row'
    },
    thumbnailStyle:
    {
        height: width / 4.5,
        width: width / 4.5,
        borderRadius: width / 100
    },
    textGroup:
    {
        justifyContent: 'center',
        paddingLeft: width / 50
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