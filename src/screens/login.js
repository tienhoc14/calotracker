import { View, Text, SafeAreaView, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import styles from '../style/login.style'
import { Ionicons } from '@expo/vector-icons';
import MyAppText from '../components/MyAppText';

const Login = ({ navigation }) => {

    const [focusEmail, setFocusEmail] = useState(null)
    const [focusPassword, setFocusPassword] = useState(null)

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

                <TextInput style={[styles.input, focusEmail]}
                    onFocus={() => setFocusEmail(styles.focusOn)}
                    onBlur={setFocusEmail}
                    autoFocus={true}
                    placeholder={'Email'}
                    value={checkLogin.email}
                    onChangeText={text => handleChangeText('email', text)} />

                <TextInput style={[styles.input, focusPassword]}
                    onFocus={() => setFocusPassword(styles.focusOn)}
                    onBlur={setFocusPassword}
                    secureTextEntry={true}
                    placeholder={'Password'}
                    value={checkLogin.password}
                    onChangeText={text => handleChangeText('password', text)} />

                <TouchableOpacity style={styles.forgotWrapper} >
                    <MyAppText content={'FORGOT YOUR PASSWORD?'} style={styles.forgot} />
                </TouchableOpacity>

            </KeyboardAvoidingView>
            <TouchableOpacity style={styles.btnLogin}
                onPress={handleLogin}
                activeOpacity={0.5} >
                <MyAppText content={'LOG IN'} style={styles.txtLogin} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Login