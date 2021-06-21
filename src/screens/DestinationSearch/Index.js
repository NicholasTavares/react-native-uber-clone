import { data } from 'browserslist'
import React, { useState, useEffect } from 'react'
import { View, TextInput, SafeAreaView } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

import styles from './styles'

const DestinationSearch = (props) => {

    const [originPlace, serOriginPlace] = useState(null)
    const [destinationPlace, setDestinationPlace] = useState(null)

    useEffect(() => {
        if (originPlace && destinationPlace) {
            console.warn('Redirect to results')
        }
    }, [originPlace, destinationPlace])

    return (
        // 'SafeAreaView' só funcionar em dispositivos IOS 11 pra cima
        <SafeAreaView>
            <View style={styles.container}>
                <GooglePlacesAutocomplete
                    placeholder='From'
                    onPress={(data, details = null) => {
                        serOriginPlace({ data, details })
                    }}
                    styles={{
                        textInput: styles.textInput
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyCvybcmx-46TpIyEZTx8UdhNOpzJLW-DUs',
                        language: 'en',
                    }}
                />

                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                        setDestinationPlace({ data, details })
                    }}
                    styles={{
                        textInput: styles.textInput
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyCvybcmx-46TpIyEZTx8UdhNOpzJLW-DUs',
                        language: 'en',
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default DestinationSearch