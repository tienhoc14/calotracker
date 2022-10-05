import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MyAppText from './MyAppText'

const GatherInput = (props) => {

    const [WeightUnits, setWeightUnits] = useState(1)
    const [HeightUnits, setHeightUnits] = useState(1)

    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)

    return (
        <View>
            {/* height */}
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
                        setHeightUnits(1)
                    }}
                    activeOpacity={1}
                >
                    <MyAppText content={'ft/in'}
                        style={[styles.unit,
                        HeightUnits == 1 && styles.unitSelected]} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        setHeightUnits(2)
                    }}
                    activeOpacity={1}
                >
                    <MyAppText content={'cm'} style={[styles.unit, HeightUnits == 2 && styles.unitSelected]} />
                </TouchableOpacity>
            </View>

            {/* weight */}
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
                        setWeightUnits(1)
                    }}
                    activeOpacity={1}
                >
                    <MyAppText content={'lbs'} style={[styles.unit, WeightUnits == 1 && styles.unitSelected]} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        setWeightUnits(2)
                    }}
                    activeOpacity={1}
                >
                    <MyAppText content={'kg'} style={[styles.unit, WeightUnits == 2 && styles.unitSelected]} />
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