import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamtersList = {
  LoginScreen: undefined;
  WelcomeScreen: undefined;
  HomeScreen: undefined;
};

export type RootNavigationProps<Screen extends keyof RootStackParamtersList> =
  NativeStackScreenProps<RootStackParamtersList, Screen>;
