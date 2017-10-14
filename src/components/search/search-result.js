import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TextInput } from 'react-native';

import icEmpty from '../../images/ic_empty.png';
import ItemVertical from '../home/shared/item-vertical';

import BackButton from '../share-components/back-button';

const { height, width } = Dimensions.get('window');

export default class KhamPha extends Component {
    render() {
        const { row, wrapper, textInput } = styles;
        const { navigator } = this.props;
        return (
            <View style={wrapper}>
                <View style={row}>
                    <BackButton navigator={navigator} />
                    <TextInput
                        style={textInput}
                        placeholder='Tìm kiếm...'
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent' />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ItemVertical navigator={navigator} />
                    <ItemVertical navigator={navigator} />
                    <ItemVertical navigator={navigator} />
                    <ItemVertical navigator={navigator} />
                    <ItemVertical navigator={navigator} />
                    <ItemVertical navigator={navigator} />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper:
    {
        flex: 1
    },
    row:
    {
        flexDirection: 'row',
        alignItems: 'center',
        padding: height / 50,
        backgroundColor: '#00c9ff'
    },
    textInput:
    {
        fontSize: height / 40,
        backgroundColor: 'transparent',
        color: 'white',
        width: width / 1.2,
        paddingTop: -height / 60,
        paddingBottom: -height / 60,
        marginLeft: width / 60,
    },
});