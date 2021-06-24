import { StyleSheet } from 'react-native'
import { theme } from '../../../global/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection:'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontFamily: theme.fonts.title_bold,
        color: theme.colors.heading,
    },
    status: {
        flexDirection:'row',
        alignItems: 'center',
        marginBottom:12,
    },
    bulletStatus:{
        width: 8,
        height: 8,
        borderRadius:50,
        marginRight:9,
    },
    statusTitle: {
        fontSize: 13,
        fontFamily: theme.fonts.text_regular,
        color: theme.colors.highlight,
    },
})