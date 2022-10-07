import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../style/start.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import MyAppText from '../components/MyAppText'

const Started = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>

            <MyAppText content="Calories Tracker" style={styles.title} fontSize={35} />
            <View style={styles.action}>
                <TouchableOpacity style={styles.btnStart}
                    onPress={() => { navigation.navigate('SetGoal') }} >
                    <MyAppText content={'GET STARTED'} style={styles.txtStart} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnLogin}
                    onPress={() => { navigation.navigate('Login') }} >
                    <MyAppText content={'Already have an account?'} />
                    <MyAppText content={' Log in'} style={styles.txtLogin} />
                </TouchableOpacity>
            </View>

        </SafeAreaView >
    )
}

export default Started