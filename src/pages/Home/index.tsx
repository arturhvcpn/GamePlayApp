import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Background } from '../../components/Background';
import { Profile } from '../../components/Profile';

import { styles } from './styles';


export function Home(){
    const [category, setCategory] = useState('')
    const navigation = useNavigation();

    const appointments = [
        {
            id:'1',
            guild:{
                id:'1',
                name:'Lendários',
                icon:null,
                owner:true,
            },
            category:'1',
            date:'18/06 às 21:00h',
            description:'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
        },
        {
            id:'2',
            guild:{
                id:'2',
                name:'Lendários',
                icon:null,
                owner:true,
            },
            category:'1',
            date:'18/06 às 21:00h',
            description:'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
        },
        {
            id:'3',
            guild:{
                id:'3',
                name:'Lendários',
                icon:null,
                owner:true,
            },
            category:'1',
            date:'18/06 às 21:00h',
            description:'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
        },
    ]

    function handleCategorySelect(categoryId:string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }
    function handleAppointmentDetails(){
        navigation.navigate('AppointmentDetails')
    }

    return(
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
            <CategorySelect 
                categorySelected={category}
                setCategory={handleCategorySelect}
            />
            
            <View style={styles.content}>
                <ListHeader title="Partidas agendadas" subtitle={`Total ${appointments.length}`} />
                <FlatList 
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <Appointment 
                            data={item}
                            onPress={handleAppointmentDetails}
                        />
                    )}
                    ItemSeparatorComponent={() => <ListDivider/>}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}                    
                />
            </View>
        </Background>
    );
}