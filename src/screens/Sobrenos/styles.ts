import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title:{
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.black
    },
    formRow: {
        margin: 10,
        flexDirection:"row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: colors.third,
        borderRadius: 5
        

    },
    icon: {
        fontSize: 28,
        color: colors.black,
        padding: 5

    },
    input: {
        fontSize: 18,
        padding: 10,
        width: "70%"

    },
    panel: {
        flex: 1,
        marginTop: 40,
        margin: 20,
        borderRadius: 20,
        backgroundColor: colors.secondary
    }
})
export default styles