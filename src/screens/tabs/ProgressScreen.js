import { View, Text, StatusBar } from 'react-native'
import React from 'react'

const ProgressScreen = () => {
  return (
    <View
      style={{
        paddingTop: StatusBar.currentHeight
      }}
    >
      <Text>ProgressScreen</Text>
    </View>
  )
}

export default ProgressScreen