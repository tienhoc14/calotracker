import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2EDE8',
        paddingHorizontal: 20,
        justifyContent: "space-between",
    },
    body: {
        marginTop: 50,
    },
    header: {
        marginBottom: 20,
    },
    arrowBack: {
        position: "absolute",
        top: 5,
        zIndex: 1,
    },
    titleLogin: {
        textAlign: "center",
        fontSize: 25,
    },
    input: {
        alignSelf: "flex-start",
        marginTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#DED7CE',
        width: '100%',
        textDecorationLine: "none",
        height: 50,
        fontSize: 14,
        paddingStart: 10,
        fontFamily: 'monospace'
    },
    focusOn:{
        borderBottomColor: '#21BA3A',
    },
    forgotWrapper: {
        marginTop: 30,
    },
    forgot: {
        color: '#5C5C5C',
        textAlign: "center",
    },
    btnLogin: {
        backgroundColor: '#21BA3A',
        bottom: 30,
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    txtLogin: {
        color: 'white',
        fontWeight: "bold"
    }
})

export default styles