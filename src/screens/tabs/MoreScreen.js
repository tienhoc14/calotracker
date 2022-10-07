import { View, Text, StatusBar } from 'react-native'
import React from 'react'

const MoreScreen = () => {
  return (
    <View
      style={{
        paddingTop: StatusBar.currentHeight
      }}
    >
      <Text>MoreScreen</Text>
    </View>
  )
}

export default MoreScreen