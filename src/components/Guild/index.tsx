import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { GuildIcon } from '../GuildIcon';

import { styles } from './styles';
import { theme } from '../../../global/theme';

export interface GuildProps {
  id: string;
  name:string;
  icon:string | null;
  owner:boolean;
}

interface Props extends TouchableOpacityProps {
  data: GuildProps
}

export function Guild({data, ...rest}:Props) {
  return (
    <TouchableOpacity 
      activeOpacity={0.7}
      style={styles.container}
      {...rest}
     >
       <GuildIcon />

       <View style={styles.content}>
         <View>
          <Text style={styles.title}>
            {data.name}
          </Text>

          <Text style={styles.owner}>
            {data.owner ? 'Administrador' : 'Convidado'}
          </Text>
         </View>
       </View>

       <Feather
        size={24}
        name={'chevron-right'}
        color={theme.colors.heading}
       />
    </TouchableOpacity>

  );
}
