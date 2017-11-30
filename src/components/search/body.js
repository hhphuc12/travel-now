import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';

import { api } from '../utils';
import ItemVertical from '../home/shared/item-vertical';

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            places: null
        }
    }

    componentWillReceiveProps() {
        return fetch(`${api}/places/filter?name=${this.props.text}&l=6&p=0`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    places: responseJson.places
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        return fetch(`${api}/places/filter?l=6&p=0`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    places: responseJson.places
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
        const itemList = this.state.places.map(item =>
            (<ItemVertical
                navigator={this.props.navigator}
                thumbnail={item.thumbnail}
                name={item.place_name}
                address={item.address}
                numStar={item.rating}
                tag={item.tag} />));
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                {itemList}
            </ScrollView>
        );
    }
}
