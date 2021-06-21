import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

// ICONS
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'

const HomeSearch = () => {

    return (
        <View>

            {/* Input box */}
            <View style={styles.inputBox}>
                <Text style={styles.inputText}>Where to?</Text>

                <View style={styles.timeContainer}>
                    <AntDesign name={"clockcircle"} size={16} color={'#535353'} />
                    <Text>Now</Text>
                    <MaterialIcons name={'keyboard-arrow-down'} size={16} />
                </View>
            </View>

            {/* Previus destination */}
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                    <AntDesign name={"clockcircle"} size={20} color={'#fff'} />
                </View>
                <Text style={styles.destinationText}>Spin Nightclub</Text>
            </View>

            {/* Home destination */}
            <View style={styles.row}>
                <View style={[styles.iconContainer, { backgroundColor: '#218cff' }]}>
                    <Entypo name={"home"} size={20} color={'#fff'} />
                </View>
                <Text style={styles.destinationText}>Spin Nightclub</Text>
            </View>

        </View>
    )
}

export default HomeSearch