import React, { Component } from 'react';
import {
    View, Image, Dimensions, StyleSheet,
    ListView, Text, TouchableOpacity, FlatList
} from 'react-native';

import ItemHorizontal from './shared/item-horizontal';
import { api, rand } from '../utils';

const { height, width } = Dimensions.get('window');

export default class MyListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    gotoListLv1() {
        const { navigator } = this.props;
        navigator.push({ name: 'list_lv1', title: this.props.listTitle, id: this.props.id });
    }

    componentDidMount() {
        let url = `${api}/places/category?category_id=${this.props.id}&l=4&p=0&province_id=${this.props.province_id}`;
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    placeList: responseJson.places,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View />
            );
        }

        const { listTitle, navigator } = this.props;
        const { wrapper, row, title, viewMore } = styles;
        return (
            <View style={wrapper}>
                <View style={row}>
                    <Text style={title}>{listTitle}</Text>
                    <TouchableOpacity onPress={this.gotoListLv1.bind(this)} >
                        <Text style={viewMore}>Xem thêm</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    horizontal
                    data={this.state.placeList}
                    renderItem={({ item }) => {
                        return <ItemHorizontal
                            id={item._id}
                            navigator={navigator}
                            title={item.place_name}
                            imgSource={item.thumbnail}
                            numStar={item.rating}
                            numRate={rand(1, 4)}
                            distance={'70'}
                            tag={item.tag} />
                    }}
                    keyExtractor={(item, index) => item.id}
                    showsHorizontalScrollIndicator={false} />
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
        fontSize: height / 38
    },
    viewMore:
    {
        fontSize: height / 45
    }
});