import { View, SafeAreaView, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import styles from '../style/login.style'
import { Ionicons } from '@expo/vector-icons';
import MyAppText from '../components/MyAppText';

const Register = ({ navigation }) => {

  const [focusName, setFocusName] = useState(null)
  const [focusEmail, setFocusEmail] = useState(null)
  const [focusPassword, setFocusPassword] = useState(null)

  const [checkLogin, setCheckLogin] = useState({
    fullname: '',
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

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.header}>
          <Ionicons name="arrow-back"
            style={styles.arrowBack}
            size={25}
            color="black"
            onPress={() => { navigation.goBack() }} />

          <MyAppText content={'Register'} style={styles.titleLogin} />
        </TouchableOpacity>

        <TextInput style={[styles.input, focusName]}
          onFocus={() => setFocusName(styles.focusOn)}
          onBlur={setFocusName}
          placeholder={'Full name'}
          autoFocus={true}
          value={checkLogin.fulllname}
          onChangeText={text => handleChangeText('fullname', text)} />

        <TextInput style={[styles.input, focusEmail]}
          onFocus={() => setFocusEmail(styles.focusOn)}
          onBlur={setFocusEmail}
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

        <MyAppText content={'Minimum 8 characters.'} style={{ fontSize: 12, color: '#5C5C5C' }} />


      </KeyboardAvoidingView>

      <View style={styles.bottom}>
        <MyAppText content={'By continuing, you agree to Terms & Conditions and Privacy Policy'}
          style={{ fontSize: 12, color: '#5C5C5C', textAlign: 'center', bottom: 50, }} />

        <TouchableOpacity style={styles.btnLogin}
          onPress={() => {
            handleLogin
            navigation.navigate('Home')
          }}
          activeOpacity={0.5} >
          <MyAppText content={'REGISTER'} style={styles.txtLogin} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Register