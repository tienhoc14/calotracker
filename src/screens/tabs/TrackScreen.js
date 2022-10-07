import { View, Text, StatusBar } from 'react-native'
import React from 'react'

const TrackScreen = () => {
  return (
    <View
    style={{
      paddingTop: StatusBar.currentHeight
    }}
    >
      <Text>TrackScreen</Text>
    </View>
  )
}

export default TrackScreen