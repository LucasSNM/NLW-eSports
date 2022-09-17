import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    cover: {
        width: 311,
        height: 220,
        opacity: 0.7,
        borderRadius: 8,
        overflow: "hidden",
        marginTop: 32,
    },
    logo: {
        width: 72,
        height: 40,
    },
    header: {
        width: '100%',
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 28,
        paddingHorizontal: 32,
        justifyContent: 'space-between',
    },
    right: {
        width: 20,
        height: 20,
    },


});