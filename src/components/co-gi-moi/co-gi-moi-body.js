import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, ActivityIndicator } from 'react-native';

import SearchButton from '../share-components/search-button';

import Item from './item';
import icEmpty from '../../images/ic_empty.png';
import { api } from '../../components/utils';

const { height, width } = Dimensions.get('window');

export default class CoGiMoi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            placeList: null
        }
    }

    componentDidMount() {
        return fetch(api + '/places/filter?l=6&p=0')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    placeList: responseJson.places
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
        const { navigator } = this.props;
        console.log(this.state.placeList);
        let listView = this.state.placeList.map(item =>
            (<Item
                placeName={item.place_name}
                thumbnail={item.thumbnail}
                detail={item.detail}
                tag={item.tag}
                navigator={navigator}
                id={item._id} />));
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                {listView}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },

});