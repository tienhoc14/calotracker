import { View, Text } from 'react-native'
import React from 'react'
import Gather from '../components/gather'

const SetGoal = ({ navigation }) => {

    var radio_props = [
        { label: 'Lose weight', value: 'lose' },
        { label: 'Maintain weight', value: 'maintain' },
        { label: 'Gain weight', value: 'gain' }
    ];

    return (
        <Gather navigation={navigation}
            initial={{ value: 'lose' }}
            next={'Activity'}
            title={'What is your goal'}
            radio_props={radio_props}
            loading={0} />
    )
}

export default SetGoal