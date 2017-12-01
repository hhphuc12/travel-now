import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TextInput } from 'react-native';

import icEmpty from '../../images/ic_empty.png';

import BackButton from '../share-components/back-button';
import Body from './body';

const { height, width } = Dimensions.get('window');

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    render() {
        const { navigator } = this.props;
        return (
            <View style={styles.wrapper}>
                <View style={styles.row}>
                    <BackButton navigator={navigator} />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Tìm kiếm...'
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'
                        onChangeText={text => this.setState({ text: text })} />
                </View>
                <Body text={this.state.text} navigator={navigator} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: height / 50,
        backgroundColor: '#00c9ff'
    },
    textInput: {
        fontSize: height / 40,
        backgroundColor: 'transparent',
        color: 'white',
        width: width / 1.2,
        paddingTop: -height / 60,
        paddingBottom: -height / 60,
        marginLeft: width / 60,
    },
});