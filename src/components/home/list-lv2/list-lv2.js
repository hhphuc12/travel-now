import React, { Component } from 'react';
import {
    Animated,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    Picker,
    TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';

import thumbnail from '../../../images/thumbnail.png';

import ListBody from './list-body';
import MySwiper from '../shared/my-swiper';
import SearchButton from '../../share-components/search-button';
import BackButton from '../../share-components/back-button';

const { height, width } = Dimensions.get('window');
const HEADER_MAX_HEIGHT = width * 375 / 540;
const HEADER_MIN_HEIGHT = height / 12.4;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class ListLv2Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollY: new Animated.Value(0),
            place: 'vietnam'
        };
    }

    _renderScrollViewContent() {
        const { navigator, id } = this.props;
        return (
            <View style={styles.scrollViewContent}>
                <ListBody navigator={navigator} id={id} />
            </View>
        );
    }

    gobackToListLv1() {
        const { navigator } = this.props;
        navigator.pop();
    }

    render() {
        const headerTranslate = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -HEADER_SCROLL_DISTANCE],
            extrapolate: 'clamp',
        });

        const imageOpacity = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp',
        });
        const imageTranslate = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 100],
            extrapolate: 'clamp',
        });

        return (
            <View style={styles.fill}>
                <Animated.ScrollView
                    style={styles.fill}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={1}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
                        { useNativeDriver: true },
                    )}
                >
                    {this._renderScrollViewContent()}
                </Animated.ScrollView>
                <Animated.View
                    style={[
                        styles.header,
                        { transform: [{ translateY: headerTranslate }] },
                    ]}
                >
                    <Animated.View
                        style={[
                            styles.backgroundImage,
                            {
                                opacity: imageOpacity,
                                transform: [{ translateY: imageTranslate }],
                            },
                        ]}>
                        <MySwiper />
                    </Animated.View>
                </Animated.View>
                <Animated.View style={styles.bar} >
                    <BackButton navigator={this.props.navigator} />
                    <Text style={styles.titleStyle}>Địa điểm</Text>
                    <SearchButton navigator={this.props.navigator} />
                </Animated.View>
            </View>
        );
    }
}

// test
const wSwiper = width;
const hSwiper = width * 375 / 540;

const styles = StyleSheet.create({
    fill:
    {
        flex: 1,
    },
    header:
    {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#00c9ff',
        overflow: 'hidden',
        height: width * 375 / 540
    },
    backgroundImage:
    {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: width,
        height: width * 375 / 540,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bar:
    {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: height / 50,
    },
    icon:
    {
        height: height / 25,
        width: height / 25
    },
    picker_wrapper:
    {
        width: width / 2.5,
        height: height / 22,
        backgroundColor: 'white',
        borderRadius: height / 10
    },
    titleStyle:
    {
        fontWeight: 'bold',
        fontSize: height / 35,
        color: 'white'
    },
    scrollViewContent:
    {
        marginTop: width * 375 / 540,
    }
});