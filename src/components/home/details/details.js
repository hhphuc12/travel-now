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
    TouchableOpacity
} from 'react-native';

import thumbnail from '../../../images/thumbnail.png';
import icEmpty from '../../../images/ic_empty.png';

import DetailsBody from './details-body';
import BackButton from '../../share-components/back-button';
import RateView from '../../share-components/rate-view';

const { height, width } = Dimensions.get('window');
const HEADER_MAX_HEIGHT = width * 375 / 540;
const HEADER_MIN_HEIGHT = height / 12.4;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class HomeMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollY: new Animated.Value(0)
        };
    }

    _renderScrollViewContent() {
        const { navigator } = this.props;
        return (
            <View style={styles.scrollViewContent}>
                <DetailsBody navigator={navigator} />
            </View>
        );
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
                        source={thumbnail} >
                        <Text />
                        <View style={styles.rateGroup}>
                            <View style={styles.rateRow}>
                                <RateView numStar={3} />
                                <Text style={styles.rateText}>2 Đánh giá</Text>
                            </View>
                            <Text style={{ color: 'white' }}>3 Lượt thích</Text>
                        </View>
                    </Animated.Image>
                </Animated.View >
                <Animated.View style={styles.bar} >
                    <BackButton navigator={this.props.navigator} />
                    <Text style={styles.title}>Lorem Ipsum</Text>
                </Animated.View>
            </View >
        );
    }
}

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
        resizeMode: 'cover',
        width: width,
        height: width * 375 / 540,
        justifyContent: 'space-between'
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
        padding: height / 50,
    },
    icon:
    {
        height: height / 25,
        width: height / 25
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
    title:
    {
        fontWeight: 'bold',
        fontSize: height / 35,
        color: 'white',
        width: width / 1.2,
        marginLeft: width / 25
    },
    rateRow:
    {
        flexDirection: 'row'
    },
    rateText:
    {
        color: 'white',
        marginLeft: width / 50,
    },
    rateGroup:
    {
        marginBottom: height / 50,
        marginLeft: height / 50
    }
});