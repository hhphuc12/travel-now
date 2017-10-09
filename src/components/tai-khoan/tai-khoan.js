import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps';

export default class TaiKhoan extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    
                >
                </MapView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 320,
        width: 320,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        height: 300,
        width: 300
    },
});