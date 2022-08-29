import React from 'react'
import Gather from '../components/gather'

const Birthday = ({ navigation }) => {

    const date = new Date()

    return (
        <Gather
            initial={date}
            loading={3}
            navigation={navigation}
            next='BodyIndex'
            title={'What is your date of birth?'} />
    )
}

export default Birthday