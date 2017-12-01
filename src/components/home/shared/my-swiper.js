import React, { Component } from 'react';
import { Image, Text, Dimensions, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';

import thumbnail from '../../../images/thumbnail.png';

const { height, width } = Dimensions.get('window');

export default class MySwiper extends Component {
    render() {
        if (typeof this.props.data === 'undefined') {
            return <View />
        }

        console.log(this.props.data[0].thumbnail);
        let itemJSX = this.props.data.map(item =>
            (<Image source={{ uri: item.thumbnail }} style={styles.backgroundImage}>
                <Text />
                <Text style={styles.imgDes}>{item.place_name}</Text>
            </Image>)
        );
        return (
            <Swiper
                showsPagination
                width={wSwiper}
                height={hSwiper} >
                { itemJSX }
            </Swiper>
        );
    }
}

const wSwiper = width;
const hSwiper = width * 375 / 540;
const styles = StyleSheet.create({
    backgroundImage:
    {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: width,
        height: width * 375 / 540,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    imgDes:
    {
        fontSize: height / 40,
        color: 'white',
        marginBottom: height / 15,
        paddingLeft: height / 50
    }
});