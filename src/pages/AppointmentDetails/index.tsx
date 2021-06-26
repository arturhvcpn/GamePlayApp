import React from 'react';
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { View, ImageBackground, Text, FlatList } from 'react-native';

import BannerImg from '../../assets/banner.png'
import ImageDiscord from '../../assets/discord.png';

import { Header } from '../../components/Header';
import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';
import { Member } from '../../components/Member';

import { theme } from '../../../global/theme';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';

export function AppointmentDetails(){
    const members = [
        {
            id:'1',
            username:'Artur',
            avatar_url:'https://github.com/arturhvcpn.png',
            status:'online'
        },
        {
            id:'2',
            username:'Diego',
            avatar_url:'https://github.com/diego3g.png',
            status:'offline'
        },
        {
            id:'3',
            username:'Rodrigo',
            avatar_url:'https://github.com/rodrigorgtic.png',
            status:'online'
        }
    ]



    return (
        <Background>
            <Header 
                title='Detalhes'
                action={
                    <BorderlessButton>
                        <Fontisto 
                            name={'share'}
                            size={24}
                            color={theme.colors.primary}  
                        />
                    </BorderlessButton>
                }
            />

                <ImageBackground 
                    source={BannerImg}
                    style={styles.banner}
                >
                    <View style={styles.bannerContent}>
                        <Text
                            style={styles.title}
                        >Lendários</Text>
                        <Text
                            style={styles.subtitle}
                        >É hoje que vamos chegar ao challenger sem perder uma partida da md10
                        </Text>
                    </View>
                </ImageBackground>
                <ListHeader
                    title={'Jogadores'}
                    subtitle={`Total ${members.length} `}
                />
                <FlatList 
                    data={members}
                    keyExtractor={item => item.id}
                    renderItem={({item}) =>(
                        <Member data={item}/>
                    )}
                    style={styles.members}
                    showsVerticalScrollIndicator={false} 
                    ItemSeparatorComponent={() => <ListDivider/>}
                />
                <View style={styles.footer}>
                    <ButtonIcon
                        title={'Entrar na partida'}
                        image={ImageDiscord}
                    />
                </View>
        </Background>
    );
}


