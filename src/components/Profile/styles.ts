import { StyleSheet } from 'react-native';
import { theme } from '../../../global/theme';


export const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems: 'center',
    },
    user: {
        flexDirection:'row',    
    },
    greetings: {
        fontFamily:theme.fonts.title_medium,
        fontSize:24,

        color: theme.colors.heading,
        marginRight:6
    },
    username: {
        fontFamily:theme.fonts.title_bold,
        fontSize:24,

        color: theme.colors.heading,
    },
    message: {
        fontFamily:theme.fonts.text_regular,
        fontSize:12,

        color: theme.colors.highlight,
    },
});