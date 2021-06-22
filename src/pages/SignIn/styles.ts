import { StyleSheet } from 'react-native';
import { theme } from '../../../global/theme';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',

    },
    image:{
        width: '100%',
        height: 360,
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50,
    },
    title: {
      textAlign: 'center',
      color: theme.colors.heading,
      fontFamily:theme.fonts.title_bold,
      fontSize:40,
      marginBottom:16,
    },
    subtitle: {
      fontSize:15,
      fontFamily:theme.fonts.text_regular,
      lineHeight:24,
      textAlign: 'center',
      marginBottom:64,
            
      color: theme.colors.heading,
      
    },
  });
  