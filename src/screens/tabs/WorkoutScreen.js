import { View, Text, StatusBar } from 'react-native'
import React from 'react'

const WorkoutScreen = () => {
  return (
    <View
      style={{
        paddingTop: StatusBar.currentHeight
      }}
    >
      <Text>WorkoutScreen</Text>
    </View>
  )
}

export default WorkoutScreen