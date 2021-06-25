import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

interface SmallBoxProps extends TextInputProps{

}

export function SmallBox({...rest}:SmallBoxProps){
    return(
        <TextInput 
            keyboardType='numeric'
            style={styles.container} 
            {...rest} 
        />
    );
}

