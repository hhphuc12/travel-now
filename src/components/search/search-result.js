import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TextInput } from 'react-native';

import icEmpty from '../../images/ic_empty.png';

import BackButton from '../share-components/back-button';
import Body from './body';

const { height, width } = Dimensions.get('window');

export default class KhamPha extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'http://tlsg.tk/api/places/filter?name=',
            result: (<Body url={'http://tlsg.tk/api/places/filter?name='} />)
        }
    }

    onCommit(text) {
        this.setState({ result: (<Body url={'http://tlsg.tk/api/places/filter?name=' + text} />) })
    }

    render() {
        const { row, wrapper, textInput } = styles;
        const { navigator } = this.props;
        return (
            <View style={wrapper}>
                <View style={row}>
                    <BackButton navigator={navigator} />
                    <TextInput
                        style={textInput}
                        placeholder='Tìm kiếm...'
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'
                        onChangeText={text => this.onCommit(text) } />
                </View>
                <Body />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper:
    {
        flex: 1
    },
    row:
    {
        flexDirection: 'row',
        alignItems: 'center',
        padding: height / 50,
        backgroundColor: '#00c9ff'
    },
    textInput:
    {
        fontSize: height / 40,
        backgroundColor: 'transparent',
        color: 'white',
        width: width / 1.2,
        paddingTop: -height / 60,
        paddingBottom: -height / 60,
        marginLeft: width / 60,
    },
});