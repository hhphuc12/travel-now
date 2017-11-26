import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import MapView from 'react-native-maps';
import Stars from 'react-native-stars';

import profile from '../../../images/profile.png';
import btSend from '../../../images/ic_send.png';
import RateTouch from '../../share-components/rate-touch';

const { height, width } = Dimensions.get('window');

export default class DetailsBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            numStar: 0
        }
    }

    componentDidMount() {
        let url = 'http://tlsg.tk/api/place/' + this.props.id;
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    place: responseJson.place
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View>
                <View style={styles.block}>
                    <View style={styles.propsRow}>
                        <Image source={require('../../../images/ic_star.png')} style={styles.icon} />
                        {/* <Text style={styles.propsText}>{this.state.place.tag}</Text> */}
                        <Text style={styles.propsText}>hihi</Text>
                    </View>
                    <View style={styles.propsRow}>
                        <Image source={require('../../../images/ic_directions.png')} style={styles.icon} />
                        <Text style={styles.propsText}>{this.state.place.address}</Text>
                    </View>
                </View>
                <View style={styles.block}>
                    <View style={styles.evaluate}>
                        <View style={styles.profileWrapper}>
                            <View style={styles.line} />
                            <Image source={profile} style={styles.profile} />
                            <View style={styles.line} />
                        </View>
                        <Text style={styles.evalText}>Xếp hạng địa điểm này</Text>
                        <Stars
                            half={true}
                            rating={0}
                            update={(val) => { this.setState({ numStar: val }) }}
                            spacing={4}
                            starSize={40}
                            count={5}
                            fullStar={require('../../../images/ic_star_rate_filled.png')}
                            emptyStar={require('../../../images/ic_star_rate.png')}
                            halfStar={require('../../../images/ic_star_rate_half.png')} />
                        {this.state.numStar == 0 ? <View />
                            : <TouchableOpacity>
                                <Text style={styles.sendNumStar}>GỬI ĐÁNH GIÁ</Text>
                            </TouchableOpacity>}
                        <Text style={styles.evalText}>hoặc để lại cảm nhận của bạn</Text>
                        <View style={styles.cmtRow}>
                            <TextInput
                                style={styles.textInput}
                                placeholder='Viết bình luận...'
                                underlineColorAndroid='white' />
                            <TouchableOpacity>
                                <Image source={btSend} style={styles.btSend} />
                            </TouchableOpacity>    
                        </View>
                    </View>
                </View>
                <View style={styles.block}>
                    <MapView style={styles.mapView} />
                </View>
                <View style={styles.block}>
                    <View style={styles.overviewWrapper}>
                        <Text style={styles.overviewTitle}>TỔNG QUAN</Text>
                        <Text>{this.state.place.detail}</Text>
                    </View>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    line: {
        width: width / 3,
        height: 1,
        backgroundColor: 'gray',
        margin: height / 80
    },
    profileWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cmtRow: {
        width: width - height / 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        width: height / 25,
        height: height / 25
    },
    propsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: height / 80
    },
    propsText: {
        marginLeft: width / 50
    },
    block: {
        backgroundColor: 'white',
        borderRadius: width / 150,
        margin: width / 120
    },
    mapView: {
        height: height / 3
    },
    overviewTitle: {
        fontWeight: 'bold'
    },
    overviewWrapper: {
        padding: height / 80
    },
    profile: {
        height: height / 13,
        width: height / 13
    },
    btSend: {
        width: width / 13,
        height: width / 13
    },
    evaluate: {
        alignItems: 'center',
        padding: height / 40
    },
    textInput: {
        height: height / 18,
        width: width / 1.2,
        backgroundColor: '#FFF',
        paddingBottom: height / 80,
        paddingLeft: width / 40,
        borderRadius: height / 10,
        borderWidth: 1,
        borderColor: '#009cff'
    },
    evalText: {
        margin: height / 50
    },
    sendNumStar: {
        color: '#009cff',
        margin: height / 50,
    },
});