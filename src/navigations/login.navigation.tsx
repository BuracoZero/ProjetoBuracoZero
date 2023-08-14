import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { ScreenCadastrar, ScreenLogin, ScreenMapa, ScreenSuasDenuncias } from "../screens";
import { TabNavigation } from './tab.navigation'
type LoginStackParamList = {
  Login: undefined
  Cadastrar: undefined
  SuasDenuncias: undefined
  Tab: undefined
  Mapa: undefined
};
type LoginScreenNavigation = StackNavigationProp<LoginStackParamList, 'Login'>
export type LoginTypes = {
  navigation: LoginScreenNavigation
}

export function LoginNavigation() {
  const Stack = createStackNavigator<LoginStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="Login" component={ScreenLogin} />
      <Stack.Screen name="Cadastrar" component={ScreenCadastrar} />
      <Stack.Screen name="Mapa" component={ScreenMapa} />
      <Stack.Screen name="SuasDenuncias" component={ScreenSuasDenuncias} />
    </Stack.Navigator>
  );
}