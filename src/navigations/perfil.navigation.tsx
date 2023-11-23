import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { ScreenPerfil, ScreenSobrenos } from "../screens";
type PerfilStackParamList = {
  Conta: undefined
  Sobre: undefined
};
type SuasDenunciasScreenNavigation = StackNavigationProp<PerfilStackParamList, 'Conta'>
export type PerfilTypes = {
  navigation: SuasDenunciasScreenNavigation
}

export function PerfilNavigation() {
  const Stack = createStackNavigator<PerfilStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Conta" component={ScreenPerfil} />
      <Stack.Screen name="Sobre" component={ScreenSobrenos} />
    </Stack.Navigator>
  );
}