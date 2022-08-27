import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2EDE8',
        paddingHorizontal: 20,
        paddingVertical: 50,
    },
    arrowBack: {
        position: "absolute",
        top: 7,
        zIndex: 1,
    },
    loading: {
        flexDirection: "row",
        justifyContent: "center",
    },
    body:{
        paddingLeft: 30,
    },
    title:{
        marginTop: 20,
        marginBottom: 15,
    },
    bottom: {
        flex: 1,
        justifyContent: "flex-end",
    },
    note: {
        textAlign: "center",
        fontSize: 12,
        marginBottom: 30,
    },
    btnLogin: {
        backgroundColor: '#21BA3A',
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