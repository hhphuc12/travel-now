import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

import { sub30 } from '../../utils';
import icStarWhite from '../../../images/ic_star_white.png';

const { height, width } = Dimensions.get('window');

export default class ItemVertical extends Component {
    goToDetail() {
        const { navigator, id, thumbnail, name } = this.props;
        navigator.push({
            name: 'home_details',
            title: name,
            id: id,
            imgSource: thumbnail,
        });
    }

    render() {
        const { wrapper, thumbnailStyle, textGroup, titleStyle, rateWrapper, rightWrapper,
            addressStyle, tagStyle, distanceStyle, rateStyle, row, icon, rateConfig } = styles;
        return (
            <TouchableOpacity style={wrapper} onPress={this.goToDetail.bind(this)}>
                <View style={row}>
                    <Image source={{uri: this.props.thumbnail }} style={thumbnailStyle} />
                    <View style={textGroup}>
                        <Text style={titleStyle}>{sub30(this.props.name)}</Text>
                        <Text style={addressStyle}>{sub30(this.props.address)}</Text>
                        <Text style={tagStyle}>{sub30(`tag: ${this.props.tag}`)}</Text>
                        <Text style={distanceStyle}>39,7 km</Text>
                    </View>
                </View>
                <View style={rightWrapper}>
                    <View style={rateWrapper}>
                        <Text style={rateStyle}>{this.props.numStar}</Text>
                    </View>
                </View>    
            </TouchableOpacity>
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
    rateStyle:
    {
        color: 'white',
        fontWeight: 'bold',
        fontSize: height / 35
    },
    rateWrapper:
    {
        justifyContent: 'center',
        height: height / 18,
        width: height / 18,
        borderRadius: height / 100,
        alignItems: 'center',
        backgroundColor: '#00c9ff',
        padding: height / 200
    },
    rightWrapper:
    {
        justifyContent: 'center'
    }
});