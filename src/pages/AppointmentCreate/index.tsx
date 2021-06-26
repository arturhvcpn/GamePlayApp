import React, { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Header } from '../../components/Header';
import { CategorySelect } from '../../components/CategorySelect';

import { SmallBox } from '../../components/SmallBox';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { ModalView } from '../../components/ModalView';

import { Guilds } from '../Guilds';
import { GuildProps } from '../../components/Guild';
import { GuildIcon } from '../../components/GuildIcon';

import { theme } from '../../../global/theme';
import { styles } from './styles';

export function AppointmentCreate(){
    const [category, setCategory] = useState('');
    const [modalVisibility, setModalVisibility] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

    function handleModalVisibility(){
        setModalVisibility(true);
    }
 
    function handleGuildSelect(guildSelect: GuildProps){
        setGuild(guildSelect);
        setModalVisibility(false);
    }

    return (
    <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height' }
        style={styles.container}
    >
        <Header title='Agendar partida'/>
        <ScrollView>
            <View style={styles.containerTitleCategory} >
                <Text style={styles.title}>Categoria</Text>
            </View>
            <CategorySelect 
                hasCheckbox
                setCategory={setCategory}
                categorySelected={category}
            />

            <View style={styles.form}>
                <RectButton onPress={handleModalVisibility} style={styles.rectButton}>
                    <View style={styles.select}>
                        {
                            guild.icon 
                            ? <GuildIcon /> 
                            : <View style={styles.image} />
                        }
                        <View style={styles.selectBody}>
                            <Text style={styles.title}>
                                {
                                    guild.name 
                                    ? guild.name 
                                    : 'Selecione um Servidor'
                                }
                            </Text>
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
                
                <View style={[styles.field, { marginBottom:14}]}>
                    <Text style={styles.title}>Descrição</Text>
                    <Text style={styles.subtitle}>Max 100 caracteres</Text>
                </View>
                    <TextArea 
                        multiline
                        maxLength={100}
                        numberOfLines={5}
                        autoCorrect={false}
                    />
                    <View style={styles.footer}>
                        <Button title={'Agendar'}/>
                    </View>
            </View>
        </ScrollView>
        <ModalView visible={modalVisibility} >
            <Guilds handleGuildSelect={handleGuildSelect}/>
        </ModalView>
    </KeyboardAvoidingView>
    );
}


