import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

import star0 from '../../images/star_0.png';
import star1 from '../../images/star_1.png';
import star2 from '../../images/star_2.png';
import star3 from '../../images/star_3.png';
import star4 from '../../images/star_4.png';
import star5 from '../../images/star_5.png';

export default class RateView extends Component {
    render() {
        let rateViewJSX;
        switch (this.props.numStar) {
            case 0:
                rateViewJSX = (<Image source={star0} style={styles.rateView} />)
                break;
            case 1:
                rateViewJSX = (<Image source={star1} style={styles.rateView} />)
                break;
            case 2:
                rateViewJSX = (<Image source={star2} style={styles.rateView} />)
                break;
            case 3:
                rateViewJSX = (<Image source={star3} style={styles.rateView} />)
                break;
            case 4:
                rateViewJSX = (<Image source={star4} style={styles.rateView} />)
                break;
            default:
                rateViewJSX = (<Image source={star5} style={styles.rateView} />)
                break;
        }
        return (
            <View>
                { rateViewJSX }
            </View>
        );
    }
}

var styles = StyleSheet.create({
    rateView:
    {
        width: width * 0.2,
        height: width * 0.2 * 128 / 688
    }
});