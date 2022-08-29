import React from 'react'
import Gather from '../components/gather'

const BodyIndex = ({ navigation }) => {
    return (
        <>
            <Gather
                initial={{
                    height: 0,
                    weight: 0
                }}
                title={'What is your height?'}
                loading={4}
                navigation={navigation}
                next={'WeeklyGoal'} />
        </>
    )
}

export default BodyIndex