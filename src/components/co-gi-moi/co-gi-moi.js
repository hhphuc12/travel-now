import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';

import Item from './item';
import MyListView from '../home/shared/list-view';
import icSearch from '../../images/ic_search.png';
import icEmpty from '../../images/ic_empty.png';

const { height, width } = Dimensions.get('window');

export default class CoGiMoi extends Component {
    render() {
        const { wrapper, row, title, icon, scrollView } = styles;
        return (
            <View style={wrapper}>
                <View style={row}>
                    <Image source={icEmpty} style={icon} />
                    <Text style={title}>Có gì mới</Text>
                    <Image source={icSearch} style={icon} />
                </View>
                <ScrollView style={scrollView} showsVerticalScrollIndicator={false}>
                    <Item />
                    <Item />
                    <Item />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper:
    {
        backgroundColor: '#eae6e6',
        flex: 1
    },
    title:
    {
        fontWeight: 'bold',
        fontSize: height / 35,
        color: 'white'
    },
    icon:
    {
        height: height / 25,
        width: height / 25
    },
    row:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: height / 50,
        backgroundColor: '#00c9ff'
    },
    scrollView:
    {

    }
});