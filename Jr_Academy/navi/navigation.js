import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomePage from '../screens/Teacher/Homepage/HomePage';

const Stack = createStackNavigator();

const screenOptions = {
    headerShown : false,
}

function MainStack() {
    return(

        <NavigationContainer>
            <Stack.Navigator initialRouteName = 'HomePage' screenOptions={screenOptions}>
            <Stack.Screen name='HomePage'component={HomePage}/>

            </Stack.Navigator>


        </NavigationContainer>
    );




};

export default MainStack;