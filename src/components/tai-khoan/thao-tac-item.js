import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class ThaoTacItem extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Image source={this.props.img} style={styles.img} />
                <Text>{this.props.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper:
    {
        flexDirection: 'row',
        padding: height / 50,
    },
    img:
    {
        width: width / 15,
        height: width / 15,
        marginRight: height / 50,
    }
});