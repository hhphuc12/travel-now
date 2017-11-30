import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import MapView from 'react-native-maps';
import Stars from 'react-native-stars';

import { api } from '../../utils';
import profile from '../../../images/profile.png';
import btSend from '../../../images/ic_send.png';

const { height, width } = Dimensions.get('window');

export default class DetailsBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            event: null,
        }
    }

    componentDidMount() {
        let url = `${api}/event/${this.props.id}`;
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    event: responseJson.event,
                    location: responseJson.geo.geometry.location,
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

        const { lat, lng } = this.state.location;
        return (
            <View>
                <View style={styles.block}>
                    <View style={styles.organizationWrapper}>
                        <View>
                            <Text style={styles.name}>{this.state.event.event_name}</Text>
                            <Text style={styles.orgaBy}>{`Tổ chức bởi ${this.state.event.organization}`}</Text>
                        </View>
                        <View style={styles.orgaDayWrapper}>
                            <Text style={styles.orgaDay}>{this.state.event.organization_day}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.block}>
                    <View style={styles.propsRow}>
                        <Image source={require('../../../images/ic_star.png')} style={styles.icon} />
                        <Text style={styles.propsText}>{`tag: ${this.state.event.tag}`}</Text>
                    </View>
                    <View style={styles.propsRow}>
                        <Image source={require('../../../images/ic_directions.png')} style={styles.icon} />
                        <Text style={styles.propsText}>{this.state.event.address}</Text>
                    </View>
                </View>
                <View style={styles.block}>
                    <MapView
                        style={styles.mapView}
                        scrollEnabled={false}
                        initialRegion={{
                            latitude: lat,
                            longitude: lng,
                            latitudeDelta: 0.06,
                            longitudeDelta: 0.06,
                        }} >
                        <MapView.Marker
                            coordinate={{ latitude: lat, longitude: lng }}
                            pinColor='red'
                        />
                    </MapView>
                </View>
                <View style={styles.block}>
                    <View style={styles.overviewWrapper}>
                        <Text style={styles.overviewTitle}>TỔNG QUAN</Text>
                        <Text>{this.state.event.detail}</Text>
                    </View>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    organizationWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: height / 80
    },
    name: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: height / 35,
    },
    orgaDay: {
        backgroundColor: '#00c9ff',
        padding: height / 120,
        borderRadius: height / 120,
    },
    orgaDayWrapper: {
        justifyContent: 'center',
    },
    orgaBy: {
        textDecorationLine: 'underline',
        fontStyle: 'italic',
        color: 'blue'
    },
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