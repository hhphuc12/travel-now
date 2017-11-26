import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import ThaoTacItem from './thao-tac-item';

const { width, height } = Dimensions.get('window');

export default class Body extends Component {
    render() {
        const data = [
            {
                img: require('../../images/ic_love.png'),
                name: 'Yêu thích'
            },
            {
                img: require('../../images/ic_star_rate.png'),
                name: 'Đánh giá'
            },
            {
                img: require('../../images/ic_comment.png'),
                name: 'Bình luận'
            },
            {
                img: require('../../images/ic_account_settings.png'),
                name: 'Quản lý tài khoản'
            },
            {
                img: require('../../images/ic_logout.png'),
                name: 'Đăng xuất'
            }
        ];
        const menuJSX = data.map(i => {
            return <ThaoTacItem img={i.img} name={i.name} />
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