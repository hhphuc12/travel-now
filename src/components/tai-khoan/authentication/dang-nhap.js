import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, Dimensions, StyleSheet, AsyncStorage } from 'react-native';

import { api } from '../../utils';

const { height, width } = Dimensions.get('window');

export default class DangNhap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            response: {}
        }
    }

    async goToTaiKhoan() {
        try {
            await AsyncStorage.setItem('travel_now_username', this.state.username);
        } catch (error) {
            console.log(error);
        }
        const { navigator } = this.props;
        navigator.pop();
    }

    signIn() {
        let url = `${api}/account/get-account?username=${this.state.email}&password=${this.state.password}`;
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status === 200) {
                    this.setState({ username: responseJson.account.username });
                    this.goToTaiKhoan();
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter your username'
                    underlineColorAndroid='white'
                    onChangeText={email => this.setState({ email: email })}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter your password'
                    underlineColorAndroid='white'
                    secureTextEntry
                    onChangeText={password => this.setState({ password: password })}
                />
                <TouchableOpacity style={styles.btnInput} onPress={this.signIn.bind(this)}>
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