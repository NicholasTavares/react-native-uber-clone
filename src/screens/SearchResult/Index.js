import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import RouteMap from '../../components/RouteMap/Index'
import UberType from '../../components/UberTypes/Index'


const SearchResult = () => {

    return (
        <View style={{ justifyContent: 'space-between' }}>
            <View style={{ height: Dimensions.get('window').height - 400 }}>
                <RouteMap />
            </View>

            <View style={{ height: 400 }}>
                <UberType />
            </View>
        </View>
    )
}

export default SearchResult