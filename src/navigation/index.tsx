import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, WelcomeScreen} from '../screens/auths';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './altNavigation';
import {RootStackParamtersList} from './type';
import {HomeScreen} from '../screens';

const Stack = createNativeStackNavigator<RootStackParamtersList>();

export const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen component={WelcomeScreen} name="WelcomeScreen" /> */}
        <Stack.Screen component={HomeScreen} name="HomeScreen" />
        <Stack.Screen component={LoginScreen} name="LoginScreen" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
