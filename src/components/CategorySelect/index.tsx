import React from 'react';
import { ScrollView } from 'react-native';
import { Category } from '../Category';

import { categories } from '../../utils/category';
import { styles } from './styles';

interface CategorySelectProps{
    categorySelected:string;
}

export function CategorySelect({ categorySelected }:CategorySelectProps){
    return(
        <ScrollView  
            horizontal
            style={styles.container} 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingRight: 40
            }}
        >
            {
             categories.map(category =>(
                 <Category 
                    key={category.id}
                    title={category.title}
                    icon={category.icon}
                    checked={category.id === categorySelected}
                 />
             ))   
            }
        </ScrollView>
    );
}