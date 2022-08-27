import { View, Text } from 'react-native'
import React from 'react'
import Gather from '../components/gather'

const Gender = ({ navigation }) => {

    var radio_props = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' }
    ];

    return (

        <Gather initial={{ value: 'male' }}
            navigation={navigation}
            next='Birthday'
            radio_props={radio_props}
            title='What is your gender?'
            loading={2} />

    )
}

export default Gender