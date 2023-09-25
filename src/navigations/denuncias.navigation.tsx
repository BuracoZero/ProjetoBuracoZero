import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { ScreenCadastroDenuncias, ScreenSuasDenuncias } from "../screens";
type SuasDenunciasStackParamList = {
  SuasDenuncias: undefined
  CadastroDenuncias: undefined
};
type SuasDenunciasScreenNavigation = StackNavigationProp<SuasDenunciasStackParamList, 'SuasDenuncias'>
export type DenunciaTypes = {
  navigation: SuasDenunciasScreenNavigation
}

export function DenunciasNavigation() {
  const Stack = createStackNavigator<SuasDenunciasStackParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="SuasDenuncias" component={ScreenSuasDenuncias} />
      <Stack.Screen name="CadastroDenuncias" component={ScreenCadastroDenuncias} />
    </Stack.Navigator>
  );
}