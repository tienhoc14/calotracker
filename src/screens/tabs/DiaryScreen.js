import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'

import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import MyAppText from '../../components/MyAppText';

const DiaryScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 20,
        backgroundColor: '#F2EDE8',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <TouchableOpacity>
          <FontAwesome name="user-circle-o" size={30} color="grey" />
        </TouchableOpacity>

        <MyAppText content={'Diary'} fontSize={20} />

        <TouchableOpacity>
          <AntDesign name="setting" size={30} color="grey" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}
      >
        <Ionicons name="caret-back-outline" size={24} color="grey" />
        <MyAppText content={'Today'} fontSize={16} />
        <Ionicons name="ios-caret-forward-outline" size={24} color="grey" />
      </View>

      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <MyAppText content={'Calories Remaining'} fontSize={16} />
          <Feather name="more-horizontal" size={24} color="black" />
        </View>

        <View style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-evenly',
        }} >
          <View style={{ alignItems: 'center' }} >
            <MyAppText content={'2200'} />
            <MyAppText content={'Goal'} />
          </View>
          <MyAppText content={'-'} />

          <View style={{ alignItems: 'center' }} >
            <MyAppText content={'1000'} />
            <MyAppText content={'Food'} />
          </View>
          <MyAppText content={'+'} />

          <View style={{ alignItems: 'center' }} >
            <MyAppText content={'300'} />
            <MyAppText content={'Exercice'} />
          </View>
          <MyAppText content={'='} />

          <View style={{ alignItems: 'center' }} >
            <MyAppText content={'1500'} />
            <MyAppText content={'Remaining'} />
          </View>
        </View>

        <View>

        </View>

      </View>

    </View>
  )
}

export default DiaryScreen