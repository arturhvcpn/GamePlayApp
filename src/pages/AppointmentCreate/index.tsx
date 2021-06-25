import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Header } from '../../components/Header';
import { Background } from '../../components/Background';
import { CategorySelect } from '../../components/CategorySelect';

import { styles } from './styles';
import { theme } from '../../../global/theme';
import { SmallBox } from '../../components/SmallBox';

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

                <View style={styles.field}>
                    <View>
                        <Text style={[styles.title, { marginBottom:16,}]}>Dia e mês</Text>

                        <View style={styles.column}>
                            <SmallBox maxLength={2}/>
                            <Text style={styles.divider}>/</Text>
                            <SmallBox maxLength={2}/>
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.title, { marginBottom:16,}]}>Horário</Text>

                        <View style={styles.column}>
                            <SmallBox maxLength={2}/>
                            <Text style={styles.divider}>:</Text>
                            <SmallBox maxLength={2}/>
                        </View>
                    </View>
                </View>
            </View>
        </Background>
    );
}


