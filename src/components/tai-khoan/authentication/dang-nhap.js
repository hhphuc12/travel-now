import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export default class DangNhap extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter your email'
                    underlineColorAndroid='white'
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter your password'
                    underlineColorAndroid='white'
                />
                <TouchableOpacity style={styles.btnInput}>
                    <Text style={styles.btText}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        padding: height / 30
    },
    textInput: {
        height: height / 15,
        backgroundColor: '#FFF',
        marginTop: height / 100,
        paddingLeft: height / 30,
        fontSize: height / 40,
        borderRadius: height / 7.5
    },
    btnInput: {
        height: height / 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        marginTop: height / 100,
        borderRadius: height / 7.5
    },
    btText: {
        color: 'white',
        fontSize: height / 37,
    }
})