import { StyleSheet } from "react-native";
import { theme } from '../../../global/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal:24,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize:18,
        fontFamily: theme.fonts.title_bold,
        color: theme.colors.heading,
        
        marginBottom:12,
    },
    owner: {        
        fontSize:12,
        fontFamily: theme.fonts.text_regular,
        color: theme.colors.highlight,
        
        marginBottom:24,
        
    },
});