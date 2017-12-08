import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import MapView from 'react-native-maps';

import BackButton from '../../share-components/back-button';
import { api } from '../../utils';

const { height, width } = Dimensions.get('window');

export default class HomeMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0.06,
                longitudeDelta: 0.06
            },
            marker: {
                latitude: 0,
                longitude: 0
            },
            places: [
                {
                    name: 'Chùa Linh Ứng',
                    lat: 16.1001262,
                    lng: 108.2778203,
                },
                {
                    name: 'Bà Nà Hill',
                    lat: 15.9977352,
                    lng: 107.9880772,
                },
                {
                    name: 'Đỉnh Bàn Cờ',
                    lat: 16.1199862,
                    lng: 108.2759459,
                },
                {
                    name: 'Bãi tắm Non Nước',
                    lat: 16.002858,
                    lng: 108.2700112,
                },
            ]
        }
    }

    backToHomeMain() {
        const { navigator } = this.props;
        navigator.pop();
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    region:
                        {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01
                        },
                    marker:
                        {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude
                        },
                    isGettingLocation: false,
                })
            },
            (error) => {
                console.log(error);
            },
            { enableHighAccuracy: false, timeout: 2000, maximumAge: 10000 }
        );
    }

    render() {
        const { row, title, icon, wrapper, mapView, marker } = styles;
        return (
            <View style={wrapper}>
                <View style={row}>
                    <BackButton navigator={this.props.navigator} />
                    <Text style={title}>Bản đồ</Text>
                    <Text />
                </View>
                <MapView
                    style={mapView}
                    initialRegion={this.state.region}
                    showsUserLocation
                    showsMyLocationButton >
                    {this.state.places.map(marker => {
                        const { lat, lng } = marker;
                        return <MapView.Marker
                            coordinate={{
                                latitude: lat,
                                longitude: lng,
                            }}
                            title={this.state.places.title}
                            color='red' />
                    })}
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper:
        {
            flex: 1
        },
    title:
        {
            fontWeight: 'bold',
            fontSize: height / 35,
            color: 'white'
        },
    icon:
        {
            height: height / 25,
            width: height / 25
        },
    row:
        {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: height / 50,
            backgroundColor: '#00c9ff'
        },
    mapView:
        {
            flex: 1
        },
    marker:
        {
            height: height / 10,
            width: height / 10
        }
});