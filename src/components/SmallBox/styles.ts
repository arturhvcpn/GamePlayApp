import { StyleSheet } from "react-native";
import { theme } from '../../../global/theme';

export const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        
        borderRadius:8,
        
        fontSize:12,
        fontFamily:theme.fonts.text_regular,

        marginRight:4,
        
        color:theme.colors.heading,
        backgroundColor:theme.colors.secondary40,

        textAlign: 'center',

    },
});