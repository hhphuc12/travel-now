import React, { Component } from 'react';
import { View } from 'react-native';

import ItemVertical from '../shared/item-vertical';

export default class ListBody extends Component {
    render() {
        const { navigator } = this.props;
        return (
            <View>
                <ItemVertical navigator={navigator} />
                <ItemVertical navigator={navigator} />
                <ItemVertical navigator={navigator} />
                <ItemVertical navigator={navigator} />
                <ItemVertical navigator={navigator} />
                <ItemVertical navigator={navigator} />
            </View>
        );
    }
}
