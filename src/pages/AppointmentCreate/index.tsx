import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Header } from '../../components/Header';
import { Background } from '../../components/Background';
import { CategorySelect } from '../../components/CategorySelect';

import { styles } from './styles';
import { theme } from '../../../global/theme';

export function AppointmentCreate(){
    const [category, setCategory] = useState('');

    return (
        <Background>
            <Header title='Agendar partida'/>
            <View style={styles.containerTitleCategory} >
                <Text style={styles.title}>Categoria</Text>
            </View>
            <CategorySelect 
                hasCheckbox
                setCategory={setCategory}
                categorySelected={category}
            />

            <View style={styles.form}>
                <RectButton style={styles.rectButton}>
                    <View style={styles.select}>
                        <View style={styles.image} />
                        <View style={styles.selectBody}>
                            <Text style={styles.title}>Selecione um Servidor</Text>
                        </View>
                        <Feather 
                            size={24}
                            name={'chevron-right'}
                            color={theme.colors.heading}
                        />
                    </View>

                </RectButton>

            </View>
        </Background>
    );
}


