import { View, Text, SafeAreaView, Platform, StatusBar } from 'react-native'
import React from 'react'

const HomeScreen = () => {
    return (
        <SafeAreaView
            style={{
                paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0
            }}>
            <Text>HomeScreen</Text>
        </SafeAreaView>
    )
}

export default HomeScreen