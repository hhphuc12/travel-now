import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

import { sub30 } from '../../utils';
import icStarWhite from '../../../images/ic_star_white.png';

const { height, width } = Dimensions.get('window');

export default class ItemVertical extends Component {
    goToDetails() {
        const { navigator, thumbnail, id, eventName } = this.props;
        navigator.push({ name: 'event_details', thumbnail: thumbnail, id: id, eventName: eventName });
    }

    render() {
        const { wrapper, thumbnailStyle, textGroup, titleStyle, rateWrapper,
            addressStyle, tagStyle, distanceStyle, rateStyle, row, icon, rateConfig } = styles;
        return (
            <TouchableOpacity onPress={this.goToDetails.bind(this)}>
                <View style={wrapper}>
                    <View style={row}>
                        <Image source={{ uri: this.props.thumbnail }} style={thumbnailStyle} />
                        <View style={textGroup}>
                            <Text style={titleStyle}>{sub30(this.props.eventName)}</Text>
                            <Text style={addressStyle}>{sub30(this.props.address)}</Text>
                            <Text style={tagStyle}>{sub30(`tag: ${this.props.tag}`)}</Text>
                            <Text style={distanceStyle}>39,7 km</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: height / 50,
        borderBottomWidth: 0.5,
        borderBottomColor: '#8693a8'
    },
    row: {
        flexDirection: 'row'
    },
    thumbnailStyle: {
        height: width / 4.5,
        width: width / 4.5,
        borderRadius: width / 100
    },
    textGroup: {
        justifyContent: 'center',
        paddingLeft: width / 50
    },
    titleStyle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: height / 40
    },
    addressStyle: {
        color: 'gray'
    },
    tagStyle: {
        color: '#fac917'
    }
});