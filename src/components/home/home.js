import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';

import HomeMain from './home-main';
import HomeMap from './map-view/home-map';
import ListLv1 from './list-lv1/list-lv1';
import ListLv2 from './list-lv2/list-lv2';

export default class Home extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ name: 'home' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'home_map': return <HomeMap navigator={navigator} />;
                        case 'list_lv1': return <ListLv1 navigator={navigator} />;
                        case 'list_lv2': return <ListLv2 navigator={navigator} />;
                        default: return <HomeMain navigator={navigator}/>;
                    }
                }}
            />
        );
    }
}