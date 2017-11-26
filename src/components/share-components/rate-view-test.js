import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

export default class RateView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        }
    }

    onPress() {
        let rand = Math.random();
        this.state.arr = [];
        for (let i = 0; i < 5; i++) {
        }
    }

    render() {
        for (let i = 0; i < 5; i++) {
            this.state.arr.push(<Text>{i}</Text>);
        }
        return (
            <View>
                <View style={styles.wrapper}>
                    {this.state.arr}
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    icon: {
        height: height / 25,
        width: height / 25
    },
    wrapper: {
        flexDirection: 'row'
    }
});