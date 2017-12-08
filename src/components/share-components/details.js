import React, { Component } from 'react';
import { View, WebView, Text, Image, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';

import BackButton from '../share-components/back-button';
import { api, sub30 } from '../../components/utils';

import icEmpty from '../../images/ic_empty.png';

const { height, width } = Dimensions.get('window');

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            title: null,
            content: null
        }
    }

    componentDidMount() {
        return fetch(`${api}/news/${this.props.id}`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    title: responseJson.news[0].title,
                    content: responseJson.news[0].content,
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
        return (
            <View style={styles.wrapper}>
                <View style={styles.row}>
                    <BackButton navigator={this.props.navigator} />
                    <Text style={styles.title}>{sub30(this.state.title)}</Text>
                    <Image source={icEmpty} style={styles.icon} />
                </View>
                <WebView source={{ html: this.state.content }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper:
        {
            flex: 1
        },
    title:
        {
            fontWeight: 'bold',
            fontSize: height / 35,
            color: 'white',
            paddingLeft: height / 50
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
            padding: height / 50,
            backgroundColor: '#00c9ff'
        }
});