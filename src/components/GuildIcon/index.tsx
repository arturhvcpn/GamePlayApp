import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';



export function GuildIcon(){
    const uri = 'https://static.wikia.nocookie.net/leagueoflegends/images/0/07/League_of_Legends_icon.png/revision/latest?cb=20191018194326';
    
    return(
        <Image 
            source={{ uri }}
            style={styles.image}
            resizeMode={'cover'}
        />
    );
}