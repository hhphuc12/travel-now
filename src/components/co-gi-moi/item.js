import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

import logo from '../../images/logo.png';

const { height, width } = Dimensions.get('window');

export default class Item extends Component {
    gotoDetails() {
        const { navigator } = this.props;
        navigator.push({
            name: 'home_details',
            navigator: navigator,
            id: this.props.id,
            imgSource: this.props.thumbnail,
            title: this.props.placeName
        });
    }

    render() {
        const { wrapper, header, headerText, dateStyle,
            logoStyle, province, titleStyle, thumbnailStyle,
            contentStyle, sourceStyle } = styles;
        const { placeName, thumbnail, detail, tag } = this.props;
        return (
            <View style={wrapper} onPress={this.gotoDetails.bind(this)} >
                <View style={header}>
                    <Image source={logo} style={logoStyle} />
                    <View style={headerText}>
                        <Text style={province}>Đà Nẵng</Text>
                        <Text style={dateStyle}>2017-05-30</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={this.gotoDetails.bind(this)} >
                    <Image source={{ uri: thumbnail }} style={thumbnailStyle}>
                        <View style={{ flex: 1 }} />
                        <Text style={titleStyle}>{placeName}</Text>
                    </Image>
                </TouchableOpacity>
                <Text style={contentStyle}>{detail}</Text>
                <Text style={sourceStyle}>{`tag: ${tag}`}</Text>
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