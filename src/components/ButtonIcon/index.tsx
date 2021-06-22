import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View, Image, Text } from 'react-native';

import { styles } from './styles';

interface ButtonIconProps extends TouchableOpacityProps{
    title: string;
    image?: string;
}


export function ButtonIcon({title, image, ...rest}: ButtonIconProps){
    return(
        <TouchableOpacity 
            style={styles.container}
            activeOpacity={0.8}
            {...rest}
        >
            <View style={styles.iconWrapper} >
                <Image source={image} style={styles.icon} />
            </View>
                <Text style={styles.title}>
                    {title}
                </Text>
        </TouchableOpacity>
    );
}