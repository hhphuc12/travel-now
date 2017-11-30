import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import H1 from './h1';
import H2 from './h2';

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state={ status: true, dkm: <H1 /> }
    }
    change() {
        this.setState({ status: !this.state.status });
    }

    render() {
        console.log(this.state.status);
        return (
            <View>
                <TouchableOpacity onPress={() => {
                    this.setState({ status: !this.state.status });
                }}>
                    <Text>CHANGE</Text>
                </TouchableOpacity>
                {/* { this.state.status ? (<H1 />) : (<H2 />) } */}
                <H1 status={this.state.status} />
            </View>
        );
    }
}