import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

import ItemVertical from '../shared/item-vertical';
import { api } from '../../utils';

export default class ListBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        let url = api + '/places/filter?sub_category_id=' + this.props.id;
        return fetch(url)
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
            <View style={{ paddingTop: 5 }}>
               {itemList}
            </View>
        );
    }
}
