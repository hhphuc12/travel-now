import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Image } from 'react-native';

import ItemMenu from './item-menu';
import icPlace from '../../images/ic_place.png';
import icTrend from '../../images/ic_trend.png';
import icFood from '../../images/ic_food.png';
import icFestival from '../../images/ic_festival.png';
import icHotel from '../../images/ic_hotel.png';
import icEntertainment from '../../images/ic_entertainment.png';

const { height, width } = Dimensions.get('window');

export default class Menu extends Component {
    render() {
        const { wrapper, row } = styles;
        const { navigator } = this.props;
        return (
            <View style={wrapper}>
                <View style={row}>
                    <ItemMenu imgSource={icPlace} title={'Điểm đến'} navigator={navigator} id={'59e321f42a36f02f45b3fdcc'} />
                    <ItemMenu imgSource={icTrend} title={'Mua sắm'} navigator={navigator} id={'5a1eac6bf12dbe0d95bf86e7'} />
                    <ItemMenu imgSource={icFood} title={'Ăn uống'} navigator={navigator} id={'59e321fb0238cd2f5b30af12'} />
                </View>
                <View style={row}>
                    <ItemMenu imgSource={icEntertainment} title={'Giải trí'} navigator={navigator} id={'5a1eac8438c29f0d800d3deb'} />
                    <ItemMenu imgSource={icHotel} title={'Nghỉ ngơi'} navigator={navigator} id={'59e322072a36f02f45b3fdcd'} />
                    <ItemMenu imgSource={icFestival} title={'Sự kiện'} navigator={navigator} />
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