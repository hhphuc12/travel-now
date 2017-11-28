import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

import MyListView from './list-view';
import SuggestList from './suggest-list';
import Menu from './menu';
import { api } from '../utils';

export default class HomeContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        return fetch(api + '/category/list')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    categoryList: responseJson
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
        const myListView = this.state.categoryList.map(item =>
            (<MyListView listTitle={item.category_name} navigator={navigator} id={item._id} />));
        return (
            <View>
                <Menu navigator={navigator} />
                <SuggestList listTitle='Gợi ý' navigator={navigator} />
                {myListView}
            </View>
        );
    }
}
