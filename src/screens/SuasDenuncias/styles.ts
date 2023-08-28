import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title:{
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.black
    },
    buttonRow:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    formRow: {
        margin: 10,
        flexDirection:"row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: colors.primary,
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
    button: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: 389,
        marginVertical: 80,
    },
    icone: {
        padding: 21
    }
})
export default styles