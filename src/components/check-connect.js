import React, { Component } from 'react';
import { View, Image, Text, NetInfo, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { height, width } = Dimensions.get('window');

export default class CheckConnect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOnline: false,
        }
    }

    goToHome() {
        const { navigator } = this.props;
        navigator.push({ name: 'home' });
    }

    componentDidMount() {
        NetInfo.isConnected.fetch().then(isConnected => {
            this.setState({ isOnline: isConnected });
        });
    }

    render() {
        if (this.state.isOnline) {
            setTimeout(this.goToHome.bind(this), 3000);
            return (
                <Image source={require('../images/welcome.png')} style={styles.welcome} />
            );
        }
        return (
            <View style={styles.wrapper}>
                <Image source={require('../images/no_internet.png')} />
                <Text style={styles.title}>No internet connection.</Text>
                <Text>Vui lòng kiểm tra kết nối internet của bạn</Text>
                <Text>và refresh ứng dụng.</Text>
                <TouchableOpacity>
                    <View style={styles.refreshWrapper}>
                        <Text style={styles.refresh}>REFRESH</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome:
    {
        width: width,
        height: height,
        marginBottom: height / 80
    },
    title:
    {
        fontSize: height / 30,
        color: 'black',
    },
    refresh:
    {
        color: 'black'
    },
    refreshWrapper:
    {
        justifyContent: 'center',
        alignItems: 'center',
        width: width / 4.5,
        backgroundColor: '#d3d3d3',
        padding: width / 80,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: width / 80,
        marginTop: height / 80
    }
})