import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Stars from 'react-native-stars';

import { subDate } from '../../utils';

const { height, width } = Dimensions.get('window');

export default class ReviewItem extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.user}>{this.props.user}</Text>
                <View style={styles.rows}>
                    <Stars
                        value={this.props.rating}
                        half={true}
                        spacing={2}
                        starSize={15}
                        count={5}
                        fullStar={require('../../../images/ic_rate_filled.png')}
                        emptyStar={require('../../../images/ic_rate.png')}
                        halfStar={require('../../../images/ic_rate_half.png')} />
                    <Text style={styles.date}>{subDate(this.props.date)}</Text>
                </View>
                <Text style={styles.cmt}>{this.props.comment}</Text>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: height / 50,
    },
    cmt: {
        color: 'black'
    },
    user: {
        color: 'black',
        fontSize: height / 38,
    },
    rows: {
        flexDirection: 'row',
    },
    date: {
        fontSize: height / 45,
        paddingLeft: height / 100,
    }
});