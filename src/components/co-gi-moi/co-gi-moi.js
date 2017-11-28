import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';

import SearchButton from '../share-components/search-button';

import Item from './item';
import MyListView from '../home/list-view';
import icEmpty from '../../images/ic_empty.png';
import Body from './co-gi-moi-body';

const { height, width } = Dimensions.get('window');

export default class CoGiMoi extends Component {
    render() {
        const { wrapper, row, title, icon, scrollView } = styles;
        const { navigator } = this.props;
        return (
            <View style={wrapper}>
                <View style={row}>
                    <Image source={icEmpty} style={icon} />
                    <Text style={title}>Có gì mới</Text>
                    <SearchButton navigator={navigator} />
                </View>
                <Body navigator={navigator} />
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
    }
});