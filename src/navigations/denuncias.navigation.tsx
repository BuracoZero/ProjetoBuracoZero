import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { ScreenCadastroDenuncias, ScreenSuasDenuncias, ScreenCamera } from "../screens";
type SuasDenunciasStackParamList = {
  Denuncias: undefined
  CadastroDenuncias: undefined
  Camera: undefined
};
type SuasDenunciasScreenNavigation = StackNavigationProp<SuasDenunciasStackParamList, 'Denuncias'>
export type DenunciaTypes = {
  navigation: SuasDenunciasScreenNavigation
}

export function DenunciasNavigation() {
  const Stack = createStackNavigator<SuasDenunciasStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Denuncias" component={ScreenSuasDenuncias} />
      <Stack.Screen name="CadastroDenuncias" component={ScreenCadastroDenuncias} />
      <Stack.Screen name="Camera" component={ScreenCamera} />
    </Stack.Navigator>
  );
}