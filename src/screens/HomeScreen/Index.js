import React from 'react'
import { View, Text, Dimensions } from 'react-native';

import HomeMap from '../../components/RouteMap/Index';
import CovidMessage from '../../components/CovidMessage/Index';
import HomeSearch from '../../components/HomeSearch/Index';

const HomeScreen = (props) => {

    return (
        <View>
            <View style={{ height: Dimensions.get('window').height - 400 }}>
                <HomeMap />
            </View>

            {/* Covid message*/}
            <CovidMessage />

            {/* Bottom comp*/}
            <HomeSearch />
        </View>
    )
}


export default HomeScreen;
