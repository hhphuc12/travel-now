import React, { Component } from 'react';
import { Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

import icBack from '../../images/ic_back.png';

export default class BackButton extends Component {
    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {
        return (
            <TouchableOpacity onPress={this.goBack.bind(this)} >
                <Image source={icBack} style={styles.icon} />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    icon:
    {
        height: height / 30,
        width: height / 30
    }
});