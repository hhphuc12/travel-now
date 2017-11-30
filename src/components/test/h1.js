import React, { Component } from 'react';
import { View } from 'react-native';

export default class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = { color: 'red' }
    }

    componentWillReceiveProps() {
        let color = this.props.status ? 'red' : 'green';
        this.setState({ color: color })
    }

    render() {
        return (
            <View style={{ backgroundColor: this.state.color, width: 200, height: 200 }} />
        );
    }
}