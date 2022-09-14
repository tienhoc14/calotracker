import { View, SafeAreaView, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import styles from '../style/gather.style'
import MyAppText from './MyAppText'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import LoadingBar from './LoadingBar';
import DatePicker from './DatePicker';
import GatherInput from './GatherInput';

const Gather = ({ navigation, title, next, radio_props, initial, loading }) => {

  const note = 'This information to calculate and provide you with daily personalized recommendations.'

  const [goal, setGoal] = useState(initial)

  const gatherFilter = (loading) => {
    if (loading === 3) {
      return <DatePicker getDate={setGoal} />
    }
    if (loading === 4) {
      return <GatherInput getIndex={setGoal} />
    }
    if (loading === 5) {
      
    }
  }

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>

          <Ionicons name="arrow-back"
            style={styles.arrowBack}
            size={25}
            color="black"
            onPress={() => { navigation.goBack() }} />

          <LoadingBar style={styles.loading} index={loading} />
        </View>

        <View style={styles.body}>

          <MyAppText content={title} style={styles.title} />

          <View>{gatherFilter(loading)}</View>

          <RadioForm
            buttonColor='#21BA3A'
            selectedButtonColor='#21BA3A'
            initial={0}
            radio_props={radio_props}
            onPress={(value) => {
              setGoal({ value })
            }}
          />

        </View>

        <View style={styles.bottom}>
          <MyAppText content={note} style={styles.note} />

          <TouchableOpacity style={styles.btnLogin}
            onPress={() => {
              navigation.navigate(next)
              console.log(goal);
            }}
            activeOpacity={0.5} >
            <MyAppText content={'NEXT'} style={styles.txtLogin} />
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </>
  )
}

export default Gather