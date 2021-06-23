import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';

import { GuildIcon } from '../GuildIcon';
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';
import { theme } from '../../../global/theme';
import { styles } from './styles';
import { categories } from '../../utils/category';
import { ListDivider } from '../ListDivider';

export interface GuildProps {
    id:string;
    name:string;
    icon:null;
    owner:boolean;
}


export interface AppointmentProps {
    id:string;
    guild:GuildProps;
    category:string;
    date:string;
    description:string;
}

interface AllAppointmentProps extends RectButtonProps{
    data:AppointmentProps;
}

export function Appointment({data,...rest}:AllAppointmentProps){
    const [category] = categories.filter(item => item.id === data.id);
    const { owner } = data.guild;

    return(
        <RectButton {...rest}>            
            <View style={styles.container}>
                <GuildIcon />

                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            { data.guild.name }
                        </Text>
                        <Text style={styles.category}>
                            { category.title }
                        </Text>
                    </View>
                    <View style={styles.footer}>
                    <View style={styles.dateInfo}>

                        <CalendarSvg />
                        <Text style={styles.date}>
                            { data.date }
                        </Text>
                    </View>    
                        <View style={styles.playersInfo}>
                            <PlayerSvg fill={owner ? theme.colors.primary : theme.colors.on }/>
                            <Text style={[styles.players, { color: owner ? theme.colors.primary : theme.colors.on}]}>
                                {owner ? 'Anfitrião' : 'Visitante'}
                            </Text>
                        </View>
                     </View>
                </View>
            </View>
        </RectButton>
    );
}