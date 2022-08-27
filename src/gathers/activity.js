import { View, Text } from 'react-native'
import React from 'react'
import Gather from '../components/gather'

const Activity = ({ navigation }) => {

  var radio_props = [
    { label: 'Not Very Active', value: '1' },
    { label: 'Lightly Active', value: '2' },
    { label: 'Active', value: '3' },
    { label: 'Very Active', value: '4' }
  ];

  return (
    <Gather navigation={navigation}
      initial={{ value: '1' }}
      title={'How active are you?'}
      radio_props={radio_props}
      next={'Gender'}
      loading={1} />
  )
}

export default Activity