import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native';
import BackButton from '../../share-components/back-button';
import icEmpty from '../../../images/ic_empty.png';
import DangKy from './dang-ky';
import DangNhap from './dang-nhap';

const { height, width } = Dimensions.get('window');

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
        }
    }

    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }

    signInView() {
        this.setState({ isLogin: true });
    }

    signUpView() {
        this.setState({ isLogin: false });
    }

    render() {
        let { isLogin } = this.state;
        let inputJSX = this.state.isLogin ? (<DangNhap />) : (<DangKy />);
        return (
            <View style={styles.wrapper}>
                <View style={styles.row}>
                    <BackButton navigator={this.props.navigator} />
                    <Text style={styles.title}>{isLogin ? 'Đăng nhập' : 'Đăng ký'}</Text>
                    <Image source={icEmpty} style={styles.icon} />
                </View>
                {inputJSX}
                <View style={styles.controlWrapper}>
                    <View style={styles.control}>
                        <TouchableOpacity style={styles.btnSignIn}
                            onPress={this.signInView.bind(this)}
                            disabled={this.state.isLogin} >
                            <Text style={isLogin ? styles.activeStyle : styles.inactiveStyle}>Đăng nhập</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnSignUp}
                            onPress={this.signUpView.bind(this)}
                            disabled={!this.state.isLogin} >
                            <Text style={!isLogin ? styles.activeStyle : styles.inactiveStyle}>Đăng ký</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#00c9ff',
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: height / 50,
    },
    icon: {
        height: height / 25,
        width: height / 25
    },
    title: {
        fontWeight: 'bold',
        fontSize: height / 35,
        color: 'white'
    },
    btnSignIn: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        padding: height / 50,
        borderTopLeftRadius: height / 25,
        borderBottomLeftRadius: height / 25,
        marginRight: width / 300
    },
    btnSignUp: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        padding: height / 50,
        borderTopRightRadius: height / 25,
        borderBottomRightRadius: height / 25,
        marginLeft: width / 300
    },
    inactiveStyle: {
        color: '#00c9ff',
        fontSize: height / 37
    },
    activeStyle: {
        color: '#D7D7D7',
        fontSize: height / 37
    },
    control: {
        flexDirection: 'row',
        width: width / 1.5,
        margin: height / 35
    },
    controlWrapper: {
        alignItems: 'center'
    }
})