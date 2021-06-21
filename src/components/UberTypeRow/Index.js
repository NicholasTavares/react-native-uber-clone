import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

import Ionicons from 'react-native-vector-icons/Ionicons'

const UberTypeRow = ({ type, price, duration }) => {

    const getImage = () => {
        if (type === 'UberX') {
            return require(`../../UberAssets/images/UberX.jpeg`)
        }
        if (type === 'Comfort') {
            return require(`../../UberAssets/images/Comfort.jpeg`)
        }
        if (type === 'UberXL') {
            return require(`../../UberAssets/images/UberXL.jpeg`)
        }
    }

    return (
        <View style={styles.container}>
            {/* IMAGE */}

            <Image
                style={styles.image}
                source={getImage()}
            />

            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                    {type}{' '}
                    <Ionicons name={'person'} size={16} />
                    3
                </Text>
                <Text style={styles.time}>
                    8:03 drop off
                </Text>
            </View>

            <View style={styles.rightContainer}>
                <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
                <Text style={styles.price}>
                    est.${price}
                </Text>
            </View>
        </View>
    )
}

export default UberTypeRow