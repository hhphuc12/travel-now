import React, { Component } from 'react';
import { View, TextInput, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Stars from 'react-native-stars';

const { height, width } = Dimensions.get('window');

import star from '../../images/ic_star_rate.png';
import starFilled from '../../images/ic_star_rate_filled.png';

export default class RateView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numStar: 0
        }
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <Stars
                    half={true}
                    rating={0}
                    update={(val) => { this.setState({ stars: val }) }}
                    spacing={4}
                    starSize={40}
                    count={5}
                    fullStar={require('../../images/ic_star_rate_filled.png')}
                    emptyStar={require('../../images/ic_star_rate.png')}
                    halfStar={require('../../images/ic_star_rate_half.png')} />
            </View>
        );
    }
}

let styles = StyleSheet.create({

});