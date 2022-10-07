import { View, SafeAreaView, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import styles from '../style/login.style'
import { Ionicons } from '@expo/vector-icons';
import MyAppText from '../components/MyAppText';

const Login = ({ navigation }) => {

    const [checkFocus, setCheckFocus] = useState(0)

    const [checkLogin, setCheckLogin] = useState({
        email: '',
        password: '',
    })

    function handleChangeText(name, value) {
        setCheckLogin({ ...checkLogin, [name]: value })
    }

    function handleLogin() {
        console.log(checkLogin);
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.body}>

                <View style={styles.header}>
                    <Ionicons name="arrow-back"
                        style={styles.arrowBack}
                        size={25}
                        color="black"
                        onPress={() => { navigation.goBack() }} />

                    <MyAppText content={'Log in'} style={styles.titleLogin} />
                </View>

                <TextInput style={[styles.input, {
                    borderBottomColor: checkFocus == 1 ? '#21BA3A' : '#DED7CE',
                }]}
                    onFocus={() => { setCheckFocus(1) }}
                    autoFocus={true}
                    placeholder={'Email'}
                    value={checkLogin.email}
                    onChangeText={text => handleChangeText('email', text)} />

                <TextInput style={[styles.input, {
                    borderBottomColor: checkFocus == 2 ? '#21BA3A' : '#DED7CE',
                }]}
                    onFocus={() => { setCheckFocus(2) }}
                    secureTextEntry={true}
                    placeholder={'Password'}
                    value={checkLogin.password}
                    onChangeText={text => handleChangeText('password', text)} />

                <TouchableOpacity style={styles.forgotWrapper} >
                    <MyAppText content={'FORGOT YOUR PASSWORD?'} style={styles.forgot} />
                </TouchableOpacity>

            </KeyboardAvoidingView>
            <TouchableOpacity style={styles.btnLogin}
                onPress={() => {
                    handleLogin
                    navigation.navigate('Home')
                }}
                activeOpacity={0.5} >
                <MyAppText content={'LOG IN'} style={styles.txtLogin} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Login