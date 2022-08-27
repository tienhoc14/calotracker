import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const LoadingBar = ({ style, index }) => {

    const color = (i) => {
        if (i <= index) {
            return '#21BA3A'
        } else {
            return 'black'
        }
    }

    return (
        <View style={style}>
            <AntDesign name="minus" size={40} color={color(0)} />
            <AntDesign name="minus" size={40} color={color(1)} />
            <AntDesign name="minus" size={40} color={color(2)} />
            <AntDesign name="minus" size={40} color={color(3)} />
            <AntDesign name="minus" size={40} color={color(4)} />
            <AntDesign name="minus" size={40} color={color(5)} />
        </View>
    )
}

export default LoadingBar