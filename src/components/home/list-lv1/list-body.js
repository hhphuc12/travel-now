import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

import MyListView from './list-view';
import { api } from '../../utils';

export default class ListBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        let url = api + '/category/sub-list/' + this.props.id;
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    subList: responseJson
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
        const myListView = this.state.subList.map(info =>
            (<MyListView listTitle={info.sub_category_name} navigator={navigator} id={info._id} />));
        return (
            <View>
                {myListView}
            </View>
        );
    }
}
