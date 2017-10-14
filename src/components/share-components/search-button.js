import React, { Component } from 'react';
import { Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

import icSearch from '../../images/ic_search.png';

export default class SearchButton extends Component {
    goToSearch() {
        const { navigator } = this.props;
        navigator.push({ name: 'search' });
    }
    render() {
        return (
            <TouchableOpacity onPress={this.goToSearch.bind(this)} >
                <Image source={icSearch} style={styles.icon} />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    icon:
    {
        height: height / 25,
        width: height / 25
    }
});