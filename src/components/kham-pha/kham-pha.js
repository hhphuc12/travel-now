import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';

import icEmpty from '../../images/ic_empty.png';
import MyListView from './list-view';

import SearchButton from '../share-components/search-button';

const { height, width } = Dimensions.get('window');

export default class KhamPha extends Component {
    render() {
        const { row, title, icon, wrapper } = styles;
        const { navigator } = this.props;
        return (
            <View style={wrapper}>
                <View style={row}>
                    <Image source={icEmpty} style={icon} />
                    <Text style={title}>Khám phá Việt Nam quyến rũ</Text>
                    <SearchButton navigator={this.props.navigator} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <MyListView listTitle={'Cẩm nang'} navigator={navigator} />
                    <MyListView listTitle={'Điểm đến'} navigator={navigator} />
                    <MyListView listTitle={'Ẩm thực'} navigator={navigator} />
                    <MyListView listTitle={'Giới thiệu'} navigator={navigator} />
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