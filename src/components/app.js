import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';

import TabView from './tab-view';
import ListLv1Home from './home/list-lv1/list-lv1';
import ListLv2Home from './home/list-lv2/list-lv2';
import HomeMap from './home/map-view/home-map';

export default class App extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ name: 'home' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'home_map': return <HomeMap navigator={navigator} />;
                        case 'list_lv1': return <ListLv1Home navigator={navigator} />;
                        case 'list_lv2': return <ListLv2Home navigator={navigator} />;
                        default: return <TabView navigator={navigator} />;
                    }
                }}
            />
        );
    }
}