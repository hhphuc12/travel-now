import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

import Item from './event-item';
import { api } from '../../utils';

export default class EventBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        let url = `${api}/event/filter?province_id=59e191ab6cda35083afbd69d`;
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    events: responseJson.events
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

        const itemList = this.state.events.map(item =>
            (<Item
                navigator={this.props.navigator}
                id={item._id}
                thumbnail={item.thumbnail}
                eventName={item.event_name}
                address={item.address}
                tag={item.tag} />));
        return (
            <View style={{ paddingTop: 5 }}>
               {itemList}
            </View>
        );
    }
}
