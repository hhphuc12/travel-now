import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';

import icSearch from '../../images/ic_search.png';
import MyListView from './list-view';

const { height, width } = Dimensions.get('window');

export default class KhamPha extends Component {
    render() {
        const { row, title, icon, wrapper } = styles;
        return (
            <View style={wrapper}>
                <View style={row}>
                    <Text />
                    <Text style={title}>Khám phá Việt Nam quyến rũ</Text>
                    <Image source={icSearch} style={icon} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <MyListView listTitle={'Cẩm nang'} />
                    <MyListView listTitle={'Điểm đến'} />
                    <MyListView listTitle={'Ẩm thực'} />
                    <MyListView listTitle={'Giới thiệu'} />
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