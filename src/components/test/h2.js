import React, { Component } from 'react';
import { View } from 'react-native';

export default class Wrapper extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'green', width: 200, height: 200 }} />
        );
    }
}