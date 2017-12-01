import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';

import TabView from './tab-view';
import ListLv1Home from './home/list-lv1/list-lv1';
import ListLv2Home from './home/list-lv2/list-lv2';
import HomeMap from './home/map-view/home-map';
import SearchResult from './search/search';
import HomeDetails from './home/details/details';
import Details from './share-components/details';
import CheckConnect from './check-connect';
import Authentication from './tai-khoan/authentication/authentication';
import Events from './home/event/event';
import EventDetails from './home/event/event-details';

export default class App extends Component {
    render() {
        console.disableYellowBox = true;
        return (
            <Navigator
                initialRoute={{ name: 'home' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'home_map': return <HomeMap navigator={navigator} />;
                        case 'list_lv1': return <ListLv1Home navigator={navigator} title={route.title} id={route.id} />;
                        case 'list_lv2': return <ListLv2Home navigator={navigator} id={route.id} />;
                        case 'search': return <SearchResult navigator={navigator} />;
                        case 'home_details':
                            return <HomeDetails
                                navigator={navigator}
                                id={route.id}
                                imgSource={route.imgSource}
                                title={route.title} />;
                        case 'other_details': return <Details navigator={navigator} id={route.id} />;
                        case 'check_connect': return <CheckConnect navigator={navigator} />;
                        case 'authentication': return <Authentication navigator={navigator} />;
                        case 'events': return <Events navigator={navigator} />;
                        case 'event_details':
                            return <EventDetails
                                navigator={navigator}
                                thumbnail={route.thumbnail}
                                id={route.id}
                                eventName={route.eventName} />;
                        default: return <TabView navigator={navigator} />;
                    }
                }}
            />
        );
    }
}