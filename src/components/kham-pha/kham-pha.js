import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

import icEmpty from '../../images/ic_empty.png';
import Body from './kham-pha-body';

import SearchButton from '../share-components/search-button';

const { height, width } = Dimensions.get('window');

export default class KhamPha extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.row}>
                    <Image source={icEmpty} style={styles.icon} />
                    <Text style={styles.title}>Khám phá Đà Nẵng quyến rũ</Text>
                    <SearchButton navigator={this.props.navigator} />
                </View>
                <Body navigator={this.props.navigator} />
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