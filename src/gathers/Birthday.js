import { View, Text } from 'react-native'
import React from 'react'
import Gather from '../components/gather'
import DateTimePicker from '@react-native-community/datetimepicker';

const Birthday = ({ navigation }) => {

    const countries = ["Egypt", "Canada", "Australia", "Ireland"]

    return (
        <>
            <Gather initial={'14/11/2000'}
                loading={3}
                navigation={navigation}
                next='Login'
                title={'What is your date of birth?'} />

        </>
    )
}

export default Birthday