import React from 'react';
import { ScrollView } from 'react-native';
import { Category } from '../Category';

import { categories } from '../../utils/category';
import { styles } from './styles';

interface CategorySelectProps{
    categorySelected:string;
    setCategory: (categoruId:string) => void;
    hasCheckbox ?: boolean;

}

export function CategorySelect({ categorySelected, setCategory, hasCheckbox=false }:CategorySelectProps){
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
                    onPress={() => setCategory(category.id)}
                    hasCheckbox={hasCheckbox}
                 />
             ))   
            }
        </ScrollView>
    );
}