import { Text } from 'react-native'
import React from 'react'

const MyAppText = ({ content, style, fontSize }) => {
    return (
        <Text style={[style, { fontFamily: 'monospace', fontSize: fontSize }]} >
            {content}
        </Text>
    )
}

export default MyAppText