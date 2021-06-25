import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../../global/theme';

import { SignIn } from '../pages/SignIn';
import { Home } from '../pages/Home';
import { AppointmentDetails } from '../pages/AppointmentDetails';
import { AppointmentCreate } from '../pages/AppointmentCreate';
 
const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator
            headerMode={'none'}
            screenOptions={{
                cardStyle:{
                    backgroundColor:theme.colors.secondary100
                }
            }}
        >
            <Screen 
                name='SignIn'
                component={SignIn}
            />
            <Screen 
                name='Home'
                component={Home}
            />
            <Screen 
                name='AppointmentDetails'
                component={AppointmentDetails}
            />
            <Screen 
                name='AppointmentCreate'
                component={AppointmentCreate}
            />
        </Navigator>
    );
}