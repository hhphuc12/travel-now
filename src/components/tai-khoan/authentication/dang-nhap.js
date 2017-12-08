import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, Dimensions, StyleSheet, AsyncStorage, Modal } from 'react-native';
import Cookie from 'react-native-cookie';

import { api } from '../../utils';

const { height, width } = Dimensions.get('window');

export default class DangNhap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            visible: false,
        }
    }

    signIn() {
        let url = `${api}/account/get-account?username=${this.state.username}&password=${this.state.password}`;
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status === 200) {
                    Cookie.set(api, 'username', responseJson.account.username)
                        .then(() => {
                            const { navigator } = this.props;
                            navigator.pop();
                        });
                }
                else {
                    this.setState({ visible: true });
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.warningWrapper}>
                    {this.state.visible ? <Text style={styles.warning}>Đăng nhập thất bại, mời thử lại</Text> : <View />}
                </View>
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
                <TouchableOpacity style={styles.btnInput} onPress={this.signIn.bind(this)}>
                    <Text style={styles.btText}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    warning: {
        color: 'red',
        fontStyle: 'italic',
        fontSize: height / 38
    },
    warningWrapper: {
        alignItems: 'center',
    },
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