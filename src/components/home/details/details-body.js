import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import MapView from 'react-native-maps';

const { height, width } = Dimensions.get('window');

export default class DetailsBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
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
                        <Text style={styles.propsText}>{this.state.place.tag}</Text>
                    </View>
                    <View style={styles.propsRow}>
                        <Image source={require('../../../images/ic_directions.png')} style={styles.icon} />
                        <Text style={styles.propsText}>{this.state.place.address}</Text>
                    </View>
                </View >
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
    icon:
    {
        width: height / 25,
        height: height / 25
    },
    propsRow:
    {
        flexDirection: 'row',
        alignItems: 'center',
        padding: height / 80
    },
    propsText:
    {
        marginLeft: width / 50
    },
    block:
    {
        backgroundColor: 'white',
        borderRadius: width / 150,
        margin: width / 120
    },
    mapView:
    {
        height: height / 3
    },
    overviewTitle:
    {
        fontWeight: 'bold'
    },
    overviewWrapper:
    {
        padding: height / 80
    }
});