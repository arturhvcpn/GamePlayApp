import { StyleSheet } from 'react-native';
import { theme } from '../../../global/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        backgroundColor:theme.colors.primary,
        borderRadius:8,
                
        flexDirection:'row',
        alignItems: 'center',        

    },

    iconWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        
        width: 56,
        height: 56,

        borderRightWidth:1,
        borderRightColor:theme.colors.line_secondary
    },

    icon: {
        width: 24,
        height: 18,
    },

    title: {
        flex: 1,
        textAlign: 'center',
        color: theme.colors.heading,
        fontFamily:theme.fonts.text_medium,
    },
  });
  