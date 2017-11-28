import React, { Component } from 'react';
import {
    View, Image, Dimensions, StyleSheet,
    ListView, Text, TouchableOpacity, FlatList
} from 'react-native';

import ItemListview from './item-listview';
import { api } from '../../components/utils';

const { height, width } = Dimensions.get('window');

export default class MyListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            news: []
        }
    }

    componentDidMount() {
        return fetch(`${api}/news/filter?category_id=${this.props.id}&province_id=all`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    news: responseJson.news
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { listTitle, navigator } = this.props;
        const { wrapper, row, title, viewMore } = styles;
        return (
            <View style={wrapper}>
                <Text style={title}>{listTitle}</Text>
                <FlatList
                    horizontal
                    data={this.state.news}
                    renderItem={({ item }) => {
                        return <ItemListview
                            id={item._id}
                            title={item.title}
                            imgSource={item.thumbnail}
                            navigator={navigator} />
                    }}
                    keyExtractor={(item, index) => item.id}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    wrapper:
    {
        backgroundColor: 'white',
        paddingTop: height / 40,
        paddingBottom: height / 60
    },
    row:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: width / 50
    },
    title:
    {
        fontWeight: 'bold',
        color: 'black',
        fontSize: height / 38,
        padding: width / 50
    },
    viewMore:
    {
        fontSize: height / 45
    }
});