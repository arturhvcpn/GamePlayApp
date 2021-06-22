import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

interface ButtonIconProps extends RectButtonProps{
    title: string;
    image?: string;
}


export function ButtonIcon({title, image, ...rest}: ButtonIconProps){
    return(
        <RectButton 
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
        </RectButton>
    );
}