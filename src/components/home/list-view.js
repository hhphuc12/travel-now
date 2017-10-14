import React, { Component } from 'react';
import {
    View, Image, Dimensions, StyleSheet,
    ListView, Text, TouchableOpacity, FlatList
} from 'react-native';

import ItemHorizontal from './shared/item-horizontal';

const { height, width } = Dimensions.get('window');

const data = [
    { id: 1, title: 'Lorem Ipsum', imgSource: require('../../images/thumbnail.png') },
    { id: 2, title: 'Lorem Ipsum', imgSource: require('../../images/thumbnail.png') },
    { id: 3, title: 'Lorem Ipsum', imgSource: require('../../images/thumbnail.png') },
    { id: 4, title: 'Lorem Ipsum', imgSource: require('../../images/thumbnail.png') },
    { id: 5, title: 'Lorem Ipsum', imgSource: require('../../images/thumbnail.png') },
    { id: 6, title: 'Lorem Ipsum', imgSource: require('../../images/thumbnail.png') }
]

export default class MyListView extends Component {
    gotoListLv1() {
        const { navigator } = this.props;
        navigator.push({ name: 'list_lv1' });
    }

    render() {
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
                    data={data}
                    renderItem={({ item }) => {
                        return <ItemHorizontal
                            title={item.title}
                            imgSource={item.imgSource}
                            numRate={4}
                            numStar={3}
                            distance={'69,96'}
                            tag={'an uong, mua sam'} />
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