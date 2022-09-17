import {StyleSheet} from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.COLORS.OVERLAY,
    },
    modal:{
        backgroundColor: THEME.COLORS.SHAPE,
        width: 311,
        // height: 245, 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        // paddingHorizontal: 40,
        // paddingVertical: 32, 
    },
    title:{
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.BLACK,
        fontSize: THEME.FONT_SIZE.LG,
    },
    subtitle:{
        color: THEME.COLORS.CAPTION_500,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: THEME.FONT_SIZE.MD,
    },
    discordTitle:{
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
        fontSize: THEME.FONT_SIZE.MD,
        marginTop: 15,
        marginBottom: 8,
    },
    discord: {
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.MD,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        backgroundColor: THEME.COLORS.BACKGROUND_800,
        width: 231,
        height: 48,
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        paddingVertical: 11,
        marginBottom: 20,
    },
    closeIcon:{
        alignSelf: 'flex-end',
        padding: 10,
    }
})