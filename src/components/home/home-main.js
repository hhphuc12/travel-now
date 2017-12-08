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
    ListView,
    ActivityIndicator
} from 'react-native';

import icMap from '../../images/ic_map.png';
import thumbnail from '../../images/thumbnail.png';

import HomeContent from './home-content';
import SearchButton from '../share-components/search-button';
import { api } from '../utils';

const { height, width } = Dimensions.get('window');
const HEADER_MAX_HEIGHT = width * 375 / 540;
const HEADER_MIN_HEIGHT = height / 12.4;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const provinceImgs = [
    'http://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/da-nang/pagePropertiesImage/da-nang-vietnam.jpg.jpg',
    'http://places.com.vn/wp-content/uploads/2015/01/ve-may-bay-gia-re-di-vinh3.jpg',
    'http://vietnamtourism.gov.vn/images/30nhathoducba1.jpg',
    'https://touristguide.edu.vn/wp-content/uploads/2016/07/Hanoi-City-Tour-full-day-private2.jpg',
    'http://sohanews.sohacdn.com/thumb_w/660/2017/photo1497166529849-1497166530006-0-0-409-660-crop-1497166563617.jpg',
    'https://tourguide.edu.vn/wp-content/uploads/2015/10/kinh-thanh-hue-du-lich-vntour1.jpg',
    'https://atoztravel.vn/wp-content/uploads/2016/03/geographical-location-7081.jpg',
    'http://baotreonline.com/wp-content/uploads/2017/10/HOI-AN-LANTERN-4.jpg',
    'http://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/hai-phong/attractions/pagePropertiesImage/hai-phong-attractions.jpg.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/a/a5/VongXoayNga6_BinhDuong.jpg',
    'http://vebay365.com.vn/image/data/BP.jpg',
    'http://dailymaybay.vn/public/uploads/images/images/dai-ly-ve-may-bay-tai-binh-thuan-01.jpg',
    'http://dulichbinhdinh.com.vn/uploads/news/2017_04/quang-trung-1.jpg',
    'http://www.pcivietnam.org/uploads/news/13-3.jpg',
    'http://timhieuvietnam.com/wp-content/uploads/2016/11/B%E1%BA%AFc-Giang-l%C3%A0-t%E1%BB%89nh-mi%E1%BB%81n-n%C3%BAi-trung-du-thu%E1%BB%99c-v%C3%B9ng-%C4%90%E1%BB%93ng-B%E1%BA%AFc-1.jpg',
    'http://media.dulich24.com.vn/diemden/bac-kan-7458/tu-van-du-lich-bac-kan-1.jpg',
    'https://www.quangbinhtravel.vn/wp-content/uploads/2016/08/song-son.jpg',
];

export default class HomeMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollY: new Animated.Value(0),
            isLoading: true,
            province: 'Đà Nẵng',
            image: 'http://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/da-nang/pagePropertiesImage/da-nang-vietnam.jpg.jpg',
            id: '59e191ab6cda35083afbd69d',
        };
    }

    _renderScrollViewContent() {
        const { navigator } = this.props;
        return (
            <View style={styles.scrollViewContent}>
                <HomeContent navigator={navigator} id={this.state.id} />
            </View>
        );
    }

    goToHomeMap() {
        const { navigator } = this.props;
        navigator.push({ name: 'home_map' });
    }

    componentDidMount() {
        return fetch(api + '/province/list')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    provinces: responseJson
                }, function () {
                    let { provinces } = this.state;
                    for (let i = 0; i < provinces.length; i++) {
                        provinces[i].image = provinceImgs[i];
                    }
                    this.setState({ provinces: provinces, isLoading: false });
                });
            })
            .catch((error) => {
                console.error(error);
            });
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

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }
        const pickerItem = this.state.provinces.map((item) =>
            (<Picker.Item label={item.province_name} value={item.province_name} />));
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
                    <View style={styles.scrollViewContent}>
                        <HomeContent navigator={this.props.navigator} id={this.state.id} />
                    </View>
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
                        source={{ uri: this.state.image }}
                    />
                </Animated.View>
                <Animated.View style={styles.bar} >
                    <TouchableOpacity onPress={this.goToHomeMap.bind(this)}>
                        <Image source={icMap} style={styles.icon} />
                    </TouchableOpacity>
                    <View style={styles.picker_wrapper}>
                        <Picker style={styles.picker}
                            selectedValue={this.state.province}
                            onValueChange={(value, index) => this.setState({
                                province: value,
                                image: this.state.provinces[index].image,
                                id: this.state.provinces[index]._id,
                            })}>
                            {pickerItem}
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