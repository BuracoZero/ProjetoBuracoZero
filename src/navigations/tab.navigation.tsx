import React from 'react';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ScreenLogin} from "../screens"
import { colors } from '../styles/colors';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
type TabParamList ={
  Login: undefined
}
type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Login'>
export type TabTypes = {
  navigation: TabScreenNavigationProp
}
export function TabNavigation() {
  const Tab = createBottomTabNavigator<TabParamList>();
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarInactiveBackgroundColor:colors.secondary,
        tabBarActiveBackgroundColor: colors.primary, 
        tabBarActiveTintColor: colors.white
      }}
    >
      <Tab.Screen name="Login" component={ScreenLogin} 
        options={{
          tabBarIcon: () => (
          <Ionicons name='person' color={colors.white} size={24} />
          )
        }}
      />

    </Tab.Navigator>
  );
}