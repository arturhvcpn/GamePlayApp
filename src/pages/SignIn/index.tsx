import React from 'react';
import { View, Text, Image } from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';

import ImageDiscord from '../../assets/discord.png';
import Illustration from '../../assets/illustration.png';

import { styles } from './styles';

export function SignIn(){

    return (
        <View style={styles.container}>
            <Image source={Illustration} style={styles.image} resizeMode={'stretch'}/>

            <View style={styles.content}>
                <Text style={styles.title}>Conecte-se{'\n'} e organize suas{'\n'} jogatinas </Text>
                <Text style={styles.subtitle}>Crie grupos para jogar seus games {`\n`} favoritos com seus amigos</Text>
                
                <ButtonIcon title={"Entrar com discord"} image={ImageDiscord} />
            </View>
        </View>
    );
}