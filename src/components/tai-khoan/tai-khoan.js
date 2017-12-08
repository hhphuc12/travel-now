import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import Cookie from 'react-native-cookie';

import icEmpty from '../../images/ic_empty.png';
import ThaoTac from './thao-tac';
import profile from '../../images/profile.png';
import { api } from '../utils';

const { height, width } = Dimensions.get('window');

export default class TaiKhoan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getCookie: false
        };
    }

    goToAuth() {
        const { navigator } = this.props;
        navigator.push({ name: 'authentication' });
    }

    componentDidMount() {
        Cookie.get(api, 'username').then(cookie => {
            this.setState({ username: cookie, getCookie: false });
        });
    }
    
    componentDidUpdate() {
        Cookie.get(api, 'username').then(cookie => {
            this.setState({ username: cookie, getCookie: false });
        });
    }

    render() {
        if (this.state.getCookie) {
            return <View />;
        }
        let nameView;
        const { username } = this.state;
        if (typeof username === 'undefined' || username === '' || username === null) {
            nameView = (<TouchableOpacity onPress={this.goToAuth.bind(this)}>
                <Text style={styles.text}>Đăng nhập</Text>
            </TouchableOpacity>);
        }
        else {
            nameView = <Text style={styles.text}>{username}</Text>
        }
        return (
            <View style={styles.wrapper}>
                <View style={styles.row}>
                    <Text style={styles.title}>Tài khoản</Text>
                </View>
                <View style={styles.account}>
                    <Image source={profile} style={styles.profile} />
                    {nameView}
                </View>
                <View style={styles.line} />
                <ThaoTac navigator={this.props.navigator} />
                <View style={styles.info}>
                    <View style={{ flex: 1 }} />
                    <View style={styles.infoWrapper}>
                        <Text style={styles.textInfo}>TravelNow v0.1.0</Text>
                        <Text style={styles.textInfo}>Copyright © 2017 TADGP Inc. All right reserved.</Text>
                    </View>
                </View>
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
            alignItems: 'center',
            justifyContent: 'center',
            padding: height / 50,
            backgroundColor: '#00c9ff'
        },
    title:
        {
            fontWeight: 'bold',
            fontSize: height / 35,
            color: 'white'
        },
    profile:
        {
            width: width / 6,
            height: width / 6,
            borderRadius: width / 12,
            margin: height / 40
        },
    text:
        {
            color: 'black',
            fontSize: height / 40,
        },
    account:
        {
            flexDirection: 'row',
            alignItems: 'center'
        },
    line:
        {
            width: width * 0.94,
            height: 1,
            backgroundColor: '#8d8d8d',
            marginLeft: width * 0.03
        },
    info:
        {
            flex: 1,
            justifyContent: 'space-between'
        },
    infoWrapper:
        {
            alignItems: 'center'
        },
    textInfo:
        {
            fontSize: height / 50
        }
});