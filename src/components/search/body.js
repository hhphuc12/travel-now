import React, { Component } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';

import ItemVertical from '../home/shared/item-vertical';

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    componentDidMount() {
        return fetch(this.props.url)
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

        const { row, wrapper, textInput } = styles;
        const { navigator } = this.props;
        const itemList = this.state.places.map(item =>
            (<ItemVertical
                navigator={navigator}
                thumbnail={item.thumbnail}
                name={item.place_name}
                address={item.address}
                numStar={item.rating}
                tag={item.tag} />));
        return (
            <View style={wrapper}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {itemList}
                </ScrollView>
            </View>
        );
    }
}