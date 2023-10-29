import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Components
import { Home } from '../screens/Home.screen';
import { History } from '../screens/History.screen';
import { Analytics } from '../screens/Analytics.screen';

type BottomTabsParams = {
  Home: React.FC;
  History: React.FC;
  Analytics: React.FC;
};

const BottomTabs = createBottomTabNavigator<BottomTabsParams>();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="History" component={History} />
      <BottomTabs.Screen name="Analytics" component={Analytics} />
    </BottomTabs.Navigator>
  );
};
