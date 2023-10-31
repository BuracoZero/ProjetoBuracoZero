import React from 'react';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ScreenLogin, ScreenMapa, ScreenSuasDenuncias, ScreenCadastrar, ScreenPerfil} from "../screens"
import { colors } from '../styles/colors';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
type TabAdmParamList ={
  Login: undefined
  Mapa: undefined
  Cadastrar: undefined
  DenunciasAdm: undefined
  CadastroDenuncias: undefined
  Camera: undefined
  Perfil: undefined
}
type TabAdmScreenNavigationProp = BottomTabNavigationProp<TabAdmParamList, 'Login'>
export type TabTypes = {
  navigation: TabAdmScreenNavigationProp
}

export function TabAdmNavigation() {
  const Tab = createBottomTabNavigator<TabAdmParamList>();
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarInactiveBackgroundColor:colors.third,
        tabBarActiveBackgroundColor: colors.primary, 
        tabBarActiveTintColor: colors.white
      }}
    >
      <Tab.Screen name="Mapa" component={ScreenMapa}
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="map-marked-alt" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen name="DenunciasAdm" component={ScreenSuasDenuncias} 
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="journal-whills" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen name="Perfil" component={ScreenPerfil} 
        options={{
          tabBarIcon: () => (
            <Ionicons name='person' color={colors.white} size={24} />
          ),
        }}
      />
       
      
    
    </Tab.Navigator>
  );
}