import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native';
import {NavigationContainer} from 'react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './homepage';

export default function Stack(){
    const Stack=createStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Homepage" component={HomePage}/>
            </Stack.Navigator>
        </NavigationContainer>

    )

}