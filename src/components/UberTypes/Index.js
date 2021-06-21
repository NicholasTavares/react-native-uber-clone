import React from 'react'
import { View, Text, Pressable } from 'react-native'

import UberTypeRow from '../UberTypeRow/Index'
import typeData from '../../UberAssets/data/types'

import styles from './styles'


const UberType = () => {

    const confirm = () => {
        console.warn('Confirm')
    }

    return (
        <View>
            {typeData && typeData.map((t) => <UberTypeRow type={t.type} price={t.price} duration={t.duration} />
            )}

            <Pressable onPress={confirm} style={{
                backgroundColor: 'black',
                padding: 10,
                margin: 10,
                alignItems: 'center'
            }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                    Confirm Uber
                </Text>
            </Pressable>
        </View>
    )
}

export default UberType