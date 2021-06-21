import React from 'react'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'

const GOOGLE_MAPS_APIKEY = 'AIzaSyCvybcmx-46TpIyEZTx8UdhNOpzJLW-DUs'

const RouteMap = (props) => {

    const origin = {
        latitude: 28.450627,
        longitude: -16.263045,
    }

    const destination = {
        latitude: 28.450227,
        longitude: -16.266045,
    }

    return (
        <MapView
            style={{ height: '100%', width: '100%' }}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: 28.450627,
                longitude: -16.263045,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.421
            }} >

            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={4}
                strokeColor="green"
            />

            <Marker
                coordinate={origin}
                title={'Origin'}
            />

            <Marker
                coordinate={destination}
                title={'Destination'}
            />

        </MapView>
    )
}


export default RouteMap;
