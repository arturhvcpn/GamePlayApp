import { StyleSheet } from 'react-native';
import { theme } from '../../../global/theme';

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection:'row',
        alignSelf:'center'
    },
    content:{
        flex: 1,
    },
    header:{
        width: '100%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:12
    },
    title:{
        color:theme.colors.heading,
        fontFamily:theme.fonts.title_bold,
        fontSize:18,
    },
    category:{
        color:theme.colors.highlight,
        fontFamily:theme.fonts.text_regular,
        fontSize:12,
        marginRight:24,
    },
    footer:{
        width: '100%',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    dateInfo:{
        alignItems:'center',
        flexDirection:'row',
    },
    date:{
        color:theme.colors.heading,
        fontFamily:theme.fonts.text_medium,
        fontSize:12,
        marginLeft:8,
    },
    playersInfo: {
        flexDirection:'row',
        alignItems:'center',
    },
    players: {
        fontFamily:theme.fonts.text_regular,
        fontSize:12,
        marginLeft:8,
        marginRight:24,
    },
});