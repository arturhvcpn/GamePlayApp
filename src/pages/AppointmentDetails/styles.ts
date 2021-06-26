import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../../global/theme';

export const styles = StyleSheet.create({
    container: {},
    banner: {
        width: '100%',
        height: 234,
        marginBottom:30,

    },
    bannerContent: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal:24,
        marginBottom:30,
    },
    title: {
        fontSize: 28,
        fontFamily: theme.fonts.title_bold,
        color: theme.colors.heading,
        marginBottom:22,
    },

    subtitle: {
        fontSize: 13,
        fontFamily: theme.fonts.text_regular,
        color: theme.colors.heading,
        lineHeight:22,
    },
    members:{
        marginTop:28,
        marginLeft:24,
    },
    footer:{
        paddingVertical:24,
        paddingHorizontal:20,
        marginBottom: getBottomSpace(),
    }
});