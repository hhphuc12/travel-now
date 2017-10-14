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
    TouchableOpacity
} from 'react-native';

import icMap from '../../images/ic_map.png';
import thumbnail from '../../images/thumbnail.png';

import HomeContent from './home-content';
import SearchButton from '../share-components/search-button';

const { height, width } = Dimensions.get('window');
const HEADER_MAX_HEIGHT = width * 375 / 540;
const HEADER_MIN_HEIGHT = height / 12.4;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class HomeMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollY: new Animated.Value(0),
            place: 'vietnam'
        };
    }

    _renderScrollViewContent() {
        const { navigator } = this.props;
        return (
            <View style={styles.scrollViewContent}>
                <HomeContent navigator={navigator} />
            </View>
        );
    }

    goToHomeMap() {
        const { navigator } = this.props;
        navigator.push({ name: 'home_map' });
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
                    <Animated.Image
                        style={[
                            styles.backgroundImage,
                            {
                                opacity: imageOpacity,
                                transform: [{ translateY: imageTranslate }],
                            },
                        ]}
                        source={thumbnail}
                    />
                </Animated.View>
                <Animated.View style={styles.bar} >
                    <TouchableOpacity onPress={this.goToHomeMap.bind(this)}>
                        <Image source={icMap} style={styles.icon} />
                    </TouchableOpacity>
                    <View style={styles.picker_wrapper}>
                        <Picker style={styles.picker}
                            selectedValue={this.state.language}
                            onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                            <Picker.Item label="Việt Nam" value="vietnam" />
                            <Picker.Item label="Hà Nội" value="hanoi" />
                            <Picker.Item label="Đà Nẵng" value="danang" />
                            <Picker.Item label="Sài Gòn" value="saigon" />
                        </Picker>
                    </View>
                    <SearchButton navigator={this.props.navigator} />
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    fill:
    {
        flex: 1,
    },
    content:
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
        resizeMode: 'cover',
        width: width,
        height: width * 375 / 540
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
    logo:
    {
        width: width,
        height: width * 375 / 540
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
    picker:
    {
        marginTop: -height / 52,
    },
    row: {
        height: 40,
        margin: 16,
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollViewContent: {
        marginTop: width * 375 / 540,
    },
});