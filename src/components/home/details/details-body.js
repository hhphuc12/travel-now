import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';

const { height, width } = Dimensions.get('window');

const contentText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
    ' Donec nec rutrum augue. Proin hendrerit tortor nec accumsan cursus.' +
    ' Sed faucibus pellentesque odio, a scelerisque tortor aliquam sed.' +
    'Curabitur eget pharetra erat. Sed augue dui, fringilla sit amet nulla id,' +
    'tristique vestibulum arcu. Class aptent taciti sociosqu ad litora torquent' +
    'per conubia nostra, per inceptos himenaeos. Phasellus elementum feugiat felis' +
    ' Donec nec rutrum augue. Proin hendrerit tortor nec accumsan cursus.' +
    ' Sed faucibus pellentesque odio, a scelerisque tortor aliquam sed.' +
    'Curabitur eget pharetra erat. Sed augue dui, fringilla sit amet nulla id,' +
    'tristique vestibulum arcu. Class aptent taciti sociosqu ad litora torquent' +
    'per conubia nostra, per inceptos himenaeos. Phasellus elementum feugiat felis';

export default class DetailsBody extends Component {

    render() {
        return (
            <View>
                <View style={styles.block}>
                    <View style={styles.propsRow}>
                        <Image source={require('../../../images/ic_star.png')} style={styles.icon} />
                        <Text style={styles.propsText}>tag a, tag b, tag c</Text>
                    </View>
                    <View style={styles.propsRow}>
                        <Image source={require('../../../images/ic_directions.png')} style={styles.icon} />
                        <Text style={styles.propsText}>193 Nguyễn Lương Bằng, Liên Chiểu, Đà Nẵng, Việt Nam</Text>
                    </View>
                </View >
                <View style={styles.block}>
                    <MapView style={styles.mapView} />
                </View>
                <View style={styles.block}>
                    <View style={styles.overviewWrapper}>
                        <Text style={styles.overviewTitle}>TỔNG QUAN</Text>
                        <Text>{contentText}</Text>
                    </View>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    icon:
    {
        width: height / 25,
        height: height / 25
    },
    propsRow:
    {
        flexDirection: 'row',
        alignItems: 'center',
        padding: height / 80
    },
    propsText:
    {
        marginLeft: width / 50
    },
    block:
    {
        backgroundColor: 'white',
        borderRadius: width / 150,
        margin: width / 120
    },
    mapView:
    {
        height: height / 3
    },
    overviewTitle:
    {
        fontWeight: 'bold'
    },
    overviewWrapper:
    {
        padding: height / 80
    }
});