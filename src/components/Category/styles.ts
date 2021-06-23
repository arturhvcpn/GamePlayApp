import { StyleSheet } from 'react-native';
import { theme } from '../../../global/theme';

export const styles = StyleSheet.create({
    container:{
        width: 104,
        height: 120,
        
        marginRight:8, 

        borderRadius:8,

        justifyContent: 'center',
        alignItems: 'center',


    },
    content:{
        width:100,
        height: 116,
        borderRadius:8,        
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical:20,
    },
    checked:{
        position: 'absolute',
        top:7,
        right:7,
        width:12,
        height:12,        
        backgroundColor: theme.colors.primary,                
        borderRadius:2,
    },
    check:{
        position: 'absolute',
        top:7,
        right:7,
        width:12,
        height:12,
        
        backgroundColor: theme.colors.secondary100,
                
        borderRadius:2,
        borderColor: theme.colors.secondary50,
        borderWidth:2,
    },
    title:{
        fontFamily: theme.fonts.title_bold,
        fontSize: 15,
        marginTop:16,
        color: theme.colors.heading,
    },
})