import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DiaryScreen from '../screens/tabs/DiaryScreen'
import MoreScreen from '../screens/tabs/MoreScreen'
import ProgressScreen from '../screens/tabs/ProgressScreen'
import TrackScreen from '../screens/tabs/TrackScreen'
import WorkoutScreen from '../screens/tabs/WorkoutScreen'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen name="Diary" component={DiaryScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="calendar-multiple-check" color={color} size={size} />
        )
      }} />
      <Tab.Screen name="Progress" component={ProgressScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="chart-line" size={size} color={color} />
        )
      }} />
      <Tab.Screen name="Track" component={TrackScreen} options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="add-circle-outline" size={37} color={color} />
        )
      }} />
      <Tab.Screen name="Workout" component={WorkoutScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5 name="dumbbell" size={21} color={color} />
        )
      }} />
      <Tab.Screen name="More" component={MoreScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <Octicons name="three-bars" size={size} color={color} />
        )
      }} />
    </Tab.Navigator>
  )
}

export default TabNavigation