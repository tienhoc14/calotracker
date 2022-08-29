import { Text } from 'react-native'
import React from 'react'

const MyAppText = ({ content, style }) => {
    return (
        <Text style={[style, { fontFamily: 'monospace' }]} >
            {content}
        </Text>
    )
}

export default MyAppText