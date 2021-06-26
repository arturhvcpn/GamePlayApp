import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

interface SmallBoxProps extends TextInputProps{}

export function TextArea({...rest}:SmallBoxProps){
    return(
        <TextInput 
            style={styles.container} 
            {...rest} 
        />
    );
}

