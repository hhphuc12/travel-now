import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export default class DangKy extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter your username'
                    underlineColorAndroid='white'
                    onChangeText={username => this.setState({ username: username })}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter your password'
                    underlineColorAndroid='white'
                    secureTextEntry
                    onChangeText={password => this.setState({ password: password })}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Confirm your password'
                    underlineColorAndroid='white'
                    secureTextEntry
                    onChangeText={password => this.setState({ passConfirm: password })}
                />
                <TouchableOpacity style={styles.btnInput}>
                    <Text style={styles.btText}>Đăng ký</Text>
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