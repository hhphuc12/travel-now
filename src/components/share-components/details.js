import React, { Component } from 'react';
import { View, WebView, Text, Image, StyleSheet, Dimensions } from 'react-native';

import BackButton from '../share-components/back-button';

import icEmpty from '../../images/ic_empty.png';

const { height, width } = Dimensions.get('window');

export default class Details extends Component {
    state = {}
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.row}>
                    <BackButton navigator={this.props.navigator} />
                    <Text style={styles.title}>Đây là tiêu đề @@</Text>
                    <Image source={icEmpty} style={styles.icon} />
                </View>
                <WebView source={{ uri: 'https://www.linkedin.com/pulse/da-nang-co-may-cay-cau-bac-qua-song-han-nguyen-thien' }} />
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