import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 16, 
        paddingTop: 30, 
        // backgroundColor: '#79B547'
    },
    table: {
        borderWidth: 2,
        borderColor: '#fff'
    },
    head: {
        height: 40,  backgroundColor: '#f1f8ff' 
    },
    wrapper: {
        flexDirection: 'row'
    },
    title: {
        flex: 1, backgroundColor: '#33105d'
    },
    row: {
        height: 28
    },
    textTitle: { 
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 5
    },
    textData: { 
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
    }

});