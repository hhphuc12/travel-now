import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

import logo from '../../images/logo.png';
import thumbnail from '../../images/thumbnail.png';

const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
    ' Donec nec rutrum augue. Proin hendrerit tortor nec accumsan cursus.' +
    ' Sed faucibus pellentesque odio, a scelerisque tortor aliquam sed.' +
    'Curabitur eget pharetra erat. Sed augue dui, fringilla sit amet nulla id,' +
    'tristique vestibulum arcu. Class aptent taciti sociosqu ad litora torquent' +
    'per conubia nostra, per inceptos himenaeos. Phasellus elementum feugiat felis';

const { height, width } = Dimensions.get('window');

export default class Item extends Component {
    render() {
        const { wrapper, header, headerText, dateStyle,
            logoStyle, province, titleStyle, thumbnailStyle,
            contentStyle, sourceStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={header}>
                    <Image source={logo} style={logoStyle} />
                    <View style={headerText}>
                        <Text style={province}>Đà Nẵng</Text>
                        <Text style={dateStyle}>2017-05-30</Text>
                    </View>
                </View>
                <Image source={thumbnail} style={thumbnailStyle}>
                    <View style={{flex: 1}} />
                    <Text style={titleStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec rutrum augue</Text>
                </Image>
                <Text style={contentStyle}>{content}</Text>
                <Text style={sourceStyle}>Nguồn: thiendia</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper:
    {
        backgroundColor: 'white',
        borderRadius: width / 150,
        margin: width / 120
    },
    header:
    {
        flexDirection: 'row',
        padding: width / 50,
    },
    headerText:
    {
        marginTop: height / 80,
    },
    logoStyle:
    {
        width: width / 9,
        height: width / 9,
        borderRadius: width / 18,
        margin: width / 50
    },
    province:
    {
        fontWeight: 'bold',
        fontSize: width / 25
    },
    dateStyle:
    {
        fontSize: width / 32,
    },
    titleStyle:
    {
        color: 'white',
        padding: width / 50,
        backgroundColor: 'rgba(0, 0, 0, 0.15)'
    },
    thumbnailStyle:
    {
        width: width,
        height: width * 375 / 540,
        flex: 1
    },
    contentStyle:
    {
        padding: width / 50
    },
    sourceStyle:
    {
        padding: width / 50
    }
});