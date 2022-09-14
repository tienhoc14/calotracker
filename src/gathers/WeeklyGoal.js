import { View, Text } from 'react-native'
import React from 'react'
import Gather from '../components/gather'

const WeeklyGoal = ({ navigation }) => {
    return (
        <Gather
            title={'Goal weight'}
            loading={5}
            navigation={navigation}
            next={'Register'} />
    )
}

export default WeeklyGoal