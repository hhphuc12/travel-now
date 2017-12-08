import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import ThaoTacItem from './thao-tac-item';
import Cookie from 'react-native-cookie';

import api from '../utils';

const { width, height } = Dimensions.get('window');

export default class Body extends Component {
    render() {
        const data = [
            {
                img: require('../../images/ic_love.png'),
                name: 'Yêu thích',
                solve: () => { }
            },
            {
                img: require('../../images/ic_rate.png'),
                name: 'Đánh giá',
                solve: () => { }
            },
            {
                img: require('../../images/ic_comment.png'),
                name: 'Bình luận',
                solve: () => { }
            },
            {
                img: require('../../images/ic_account_settings.png'),
                name: 'Quản lý tài khoản',
                solve: () => { }
            },
            {
                img: require('../../images/ic_logout.png'),
                name: 'Đăng xuất',
                solve: () => {
                    Cookie.clear(api)
                        .then(() => {
                            const { navigator } = this.props;
                            navigator.push({ name: 'authentication' });
                        });
                }
            }
        ];
        const menuJSX = data.map(i => {
            return <ThaoTacItem img={i.img} name={i.name} solve={i.solve} />
        });
        return (
            <View style={styles.wrapper}>
                {menuJSX}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper:
    {

    }
});