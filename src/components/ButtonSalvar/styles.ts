import { StyleSheet } from "react-native";
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    buttonPrimary: {
        backgroundColor: colors.secondary,
        borderRadius: 5,
        margin: 10,
    },
    buttonSecondary: {
        backgroundColor: colors.primary,
        borderRadius: 5,
        margin: 10,
        padding: 3,
        width: 75
    },
    buttonFourth: {
        backgroundColor: colors.fourth,
        borderRadius: 5,
        margin: 10,
        padding: 3,
        width: 75
    },
    text: {
        fontSize: 10,
        fontWeight: "bold",
        textAlign: "center",
        padding: 10,
        color: colors.white
    }
})