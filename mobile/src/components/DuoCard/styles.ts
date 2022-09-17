import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        width: 210,
        height: 300,
        backgroundColor: THEME.COLORS.SHAPE,
        borderRadius: 8,
        padding: 20,
        marginLeft: 20,
    },
    ads: {
        // paddingHorizontal: 20,
        // paddingVertical: 20,
    },
    contentList:{
        paddingLeft: 32,
        paddingRight: 64,
    },
    button:{
        // width:36,
        height: 36,
        backgroundColor: THEME.COLORS.PRIMARY,
        borderRadius: 6,
        overflow: "hidden",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonText:{
        paddingHorizontal: 10,
        color: THEME.COLORS.TEXT,
        fontFamily:THEME.FONT_FAMILY.SEMI_BOLD,
        fontSize:THEME.FONT_SIZE.MD,
    }
})