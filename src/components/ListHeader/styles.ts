import { StyleSheet } from 'react-native';
import { theme } from '../../../global/theme';

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal: 24,
    },
    title:{
        color: theme.colors.heading,
        fontFamily:theme.fonts.title_bold,
        fontSize: 18,
    },
    subtitle:{
        color: theme.colors.highlight,
        fontFamily:theme.fonts.text_regular,
        fontSize: 14,
    },
})