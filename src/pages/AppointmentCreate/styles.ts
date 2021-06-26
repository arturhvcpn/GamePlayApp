import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../../global/theme';

export const styles = StyleSheet.create({
    container: {},
    containerTitleCategory:{
        
        marginLeft:22,
        marginTop:34,
        marginBottom:18,
    },
    title: {
        fontSize: 18,
        fontFamily: theme.fonts.title_bold,
        color: theme.colors.heading,
    },
    form:{
        marginTop:32,
        paddingHorizontal:24,
    },

    rectButton:{
        borderRadius:8,
    },

    select:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        width:'100%',

        borderColor:theme.colors.secondary50,
        borderRadius:8,
        borderWidth:1,

        paddingRight:24,

        overflow: 'hidden',
    },
    image:{
        width:64,
        height: 68,
        borderRadius:8,
        backgroundColor: theme.colors.secondary40,

        borderColor:theme.colors.secondary50,
        borderWidth:1,
    },
    selectBody:{
        flex: 1,
        alignItems: 'center',
    },
    field:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:30
    },
    column:{
        flexDirection:'row',
        alignItems: 'center',
    },
    divider:{
        marginRight:4,
        fontSize: 14,
        fontFamily: theme.fonts.text_regular,
        color: theme.colors.highlight,
    },
    subtitle:{
        fontSize: 13,
        fontFamily: theme.fonts.text_regular,
        color: theme.colors.highlight,
    },
    footer:{
        marginVertical:20,
        marginBottom:56,
    },
    
});