import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, Image, TouchableOpacity } from 'react-native';

import icEmpty from '../../images/ic_empty.png';
import ThaoTac from './thao-tac';
import profile from '../../images/profile.png';

const { height, width } = Dimensions.get('window');

export default class TaiKhoan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            username: ''
        };
    }

    goToAuth() {
        const { navigator } = this.props;
        navigator.push({ name: 'authentication' });
    }

    componentDidMount() {
        async function getUsername() {
            try {
                let value = await AsyncStorage.getItem('travel_now_username');
                if (value !== '') {
                    this.setState({ loggedIn: true, username: value });
                }
            } catch (error) { }
        }
        getUsername();
        console.log(this.state.username + '-------------');
    }

    render() {
        // async function getUsername() {
        //     try {
        //         let value = await AsyncStorage.getItem('travel_now_username');
        //         if (value !== '') {
        //             this.setState({ loggedIn: true, username: value });
        //         }
        //     } catch (error) { }
        // }
        // getUsername();
        // console.log(this.state.username + '-------------');
        let nameView = this.state.loggedIn ?
            (<Text style={styles.text}>{this.state.username}</Text>) :
            (<TouchableOpacity onPress={this.goToAuth.bind(this)}>
                <Text style={styles.text}>Đăng nhập</Text>
            </TouchableOpacity>);
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
                <ThaoTac />
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