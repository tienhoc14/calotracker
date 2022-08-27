import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2EDE8',
        paddingHorizontal: 20,
        justifyContent: "space-between",
    },
    title: {
        textAlign: "center",
        marginTop: windowHeight / 3,
        fontSize: 25,
        fontWeight: "bold",
    },
    btnStart: {
        backgroundColor: '#21BA3A',
        height: 50,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    txtStart: {
        color: 'white',
        fontWeight: "bold"
    },
    action: {
        bottom: 40,
    },
    btnLogin: {
        flexDirection: "row",
        marginTop: 30,
        alignSelf: "center",
    },
    txtLogin: {
        color: '#21BA3A',
    },
})

export default styles