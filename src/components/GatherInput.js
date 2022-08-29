import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MyAppText from './MyAppText'

const GatherInput = (props) => {
    const [Cm, setCm] = useState(styles.unitSelected)
    const [Ft, setFt] = useState()
    const [Lbs, setLbs] = useState()
    const [Kg, setKg] = useState(styles.unitSelected)

    const [height, setHeight] = useState()
    const [weight, setWeight] = useState()

    return (
        <View>
            <TextInput placeholder='0'
                value={height}
                onChangeText={(text) => {
                    setHeight(text)
                }}
                keyboardType='decimal-pad'
                style={styles.input} />

            <View style={styles.unitWrapper}>
                <TouchableOpacity
                    onPress={() => {
                        setFt(styles.unitSelected)
                        setCm()
                    }}
                    activeOpacity={1}
                >
                    <MyAppText content={'ft/in'} style={[styles.unit, Ft]} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        setCm(styles.unitSelected)
                        setFt()
                    }}
                    activeOpacity={1}
                >
                    <MyAppText content={'cm'} style={[styles.unit, Cm]} />
                </TouchableOpacity>
            </View>

            <MyAppText content={'What is your current weight?'} style={{ marginBottom: 15, marginTop: 20, }} />
            <TextInput placeholder='0'
                value={weight}
                onChangeText={(text) => setWeight(text)}
                keyboardType='decimal-pad'
                style={styles.input}
            />
            <View style={styles.unitWrapper}>
                <TouchableOpacity
                    onPress={() => {
                        setLbs(styles.unitSelected)
                        setKg()
                    }}
                    activeOpacity={1}
                >
                    <MyAppText content={'lbs'} style={[styles.unit, Lbs]} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        setKg(styles.unitSelected)
                        setLbs()
                    }}
                    activeOpacity={1}
                >
                    <MyAppText content={'kg'} style={[styles.unit, Kg]} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default GatherInput

const styles = StyleSheet.create({
    input: {
        width: '30%',
        borderBottomWidth: 1,
        borderBottomColor: "#21BA3A",
        marginBottom: 10,
    },
    unitWrapper: {
        flexDirection: 'row',
        width: '30%',
        justifyContent: 'space-around'
    },
    unit: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    unitSelected: {
        backgroundColor: "#21BA3A",
        color: 'white'
    },
})