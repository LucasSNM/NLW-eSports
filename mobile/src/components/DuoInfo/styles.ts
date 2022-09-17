import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 10,
    },
    ads: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    title: {
        color: THEME.COLORS.CAPTION_500,
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
    },
    subtitle: {
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.BOLD,
    },
    // yes: {
    //     color: THEME.COLORS.SUCCESS,
    //     fontSize: THEME.FONT_SIZE.MD,
    //     fontFamily: THEME.FONT_FAMILY.BOLD,
    // },
    // no: {
    //     color: THEME.COLORS.ALERT,
    //     fontSize: THEME.FONT_SIZE.MD,
    //     fontFamily: THEME.FONT_FAMILY.BOLD,
    // }
})