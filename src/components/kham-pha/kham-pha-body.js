import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, ActivityIndicator } from 'react-native';

import icEmpty from '../../images/ic_empty.png';
import MyListView from './list-view';
import { api } from '../../components/utils';

import SearchButton from '../share-components/search-button';

const { height, width } = Dimensions.get('window');

export default class KhamPha extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            categoryList: null
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
        const { row, title, icon, wrapper } = styles;
        const listView = this.state.categoryList.map(item =>
            (<MyListView listTitle={item.category_name} navigator={this.props.navigator} id={item._id} />));
        return (
            <View style={wrapper}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {listView}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper:
    {
        flex: 1
    }
});