import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

import star from '../../images/ic_rate.png';
import starFilled from '../../images/ic_rate_filled.png';

export default class RateView extends Component {
    render() {
        let rateViewJSX = [];
        let { numStar } = this.props;
        for (let i = 0; i < 5; i++) {
            rateViewJSX.push(i < numStar ? <Image style={styles.icon} source={starFilled} />
                : <Image style={styles.icon} source={star} />);
        }
        return (
            <View>
                <View style={styles.wrapper}>
                    {rateViewJSX}
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    icon: {
        height: height / 35,
        width: height / 35
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: height / 6.5
    }
});