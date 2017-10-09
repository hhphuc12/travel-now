import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Image } from 'react-native';

import ItemMenu from './item-menu';
import icPlace from '../../images/ic_place.png';
import icTrend from '../../images/ic_trend.png';
import icFood from '../../images/ic_food.png';
import icFestival from '../../images/ic_festival.png';
import icHotel from '../../images/ic_hotel.png';
import icComunity from '../../images/ic_community.png';

const { height, width } = Dimensions.get('window');

export default class Menu extends Component {
    render() {
        const { wrapper, row } = styles;
        return (
            <View style={wrapper}>
                <View style={row}>
                    <ItemMenu imgSource={icPlace} title={'Điểm đến'} />
                    <ItemMenu imgSource={icTrend} title={'Xu hướng'} />
                    <ItemMenu imgSource={icFood} title={'Đặc sản'} />
                </View>
                <View style={row}>
                    <ItemMenu imgSource={icFestival} title={'Lễ hội'} />
                    <ItemMenu imgSource={icHotel} title={'Khách sạn'} />
                    <ItemMenu imgSource={icComunity} title={'Cộng đồng'} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper:
    {
        width: width,
        height: height / 3.5
    },
    row:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});