import React, { Component } from 'react';
import { View, Image, Dimensions, StyleSheet, Picker, ListView, Text, ScrollView } from 'react-native';

import icMap from '../../images/ic_map.png';
import icSearch from '../../images/ic_search.png';
import thumbnail from '../../images/thumbnail.png';

import MyListView from './list-view';

const { height, width } = Dimensions.get('window');

export default class Home extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            place: 'Việt Nam'
        };
    }

    render() {
        const { wrapper, icon, row, logo, picker_wrapper, picker } = styles;
        return (
            <ScrollView style={wrapper} showsVerticalScrollIndicator={false} onScroll={this.handleScroll}>
                <Image source={thumbnail} style={logo}>
                    <View style={row}>
                        <Image source={icMap} style={icon} />
                        <View style={picker_wrapper}>
                            <Picker style={picker}
                                selectedValue={this.state.place}
                                onValueChange={(itemValue, itemIndex) => this.setState({ place: itemValue })}>
                                <Picker.Item label="Việt Nam" value="vietnam" />
                                <Picker.Item label="Hà Nội" value="hanoi" />
                                <Picker.Item label="Đà Nẵng" value="danang" />
                                <Picker.Item label="Tp. Hồ Chí Minh" value="tphcm" />
                            </Picker>
                        </View>
                        <Image source={icSearch} style={icon} />
                    </View>
                </Image>
                <MyListView listTitle={'Gợi ý dành cho bạn'} />
                <MyListView listTitle={'Điểm đến'} />
                <MyListView listTitle={'Ăn uống'} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper:
    {
        backgroundColor: '#e2e2e2'
    },
    icon:
    {
        height: height / 25,
        width: height / 25
    },
    row:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: height / 35,
    },
    logo:
    {
        width: width,
        height: width * 375 / 540
    },
    picker_wrapper:
    {
        width: width / 2.5,
        height: height / 20,
        backgroundColor: 'white',
        borderRadius: height / 10
    },
    picker:
    {
        marginTop: -height / 60
    }
});