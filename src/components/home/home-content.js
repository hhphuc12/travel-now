import React, { Component } from 'react';
import { View } from 'react-native';

import MyListView from './list-view';
import Menu from './menu';

export default class HomeContent extends Component {
    render() {
        return (
            <View>
                <Menu />
                <MyListView listTitle={'Gợi ý dành cho bạn'} />
                <MyListView listTitle={'Điểm đến'} />
                <MyListView listTitle={'Ăn uống'} />
            </View>
        );
    }
}
