import React from 'react';
import { View, Text } from 'react-native';

import { Avatar } from '../Avatar';

import { styles } from './styles';
import { theme } from '../../../global/theme';

export interface MemberProps {
    id: string;
    username: string;
    avatar_url: string;
    status: string;
}

interface DataProps {
    data: MemberProps
}

export function Member({data}:DataProps){
    const isOnline = data.status === 'online';
    const { on, primary } = theme.colors;


    return (
        <View style={styles.container} >
            <Avatar urlImage={data.avatar_url} />
            <View>
                <Text style={styles.title}>{data.username}</Text>
                
                <View style={styles.status}>
                    <View style={[
                        styles.bulletStatus,
                        {
                            backgroundColor: isOnline ? on : primary
                        }
                        ]}/>
                    <Text style={styles.statusTitle}>
                        { isOnline 
                        ? 'Disponível'
                        : 'Ocupado'
                        }
                    </Text>
                </View>
            </View>
        </View>
    );
}


