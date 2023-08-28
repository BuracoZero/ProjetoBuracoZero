import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column'
    },
    title:{
        fontSize: 30,
        fontWeight: "bold",
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
    form: {
        margin: 10,
        flexDirection:"row",
        alignItems:'baseline',
        width: 390,
        height: 300,
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
    img: {
        height: Dimensions.get('window').width * 0.7,
        width: Dimensions.get('window').width * 0.7
    }
})
export default styles