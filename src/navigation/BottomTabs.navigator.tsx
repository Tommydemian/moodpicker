import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Components
import { Home } from '../screens/Home.screen';
import { History } from '../screens/History.screen';
import { Analytics } from '../screens/Analytics.screen';
import { Text } from 'react-native';
import { HomeIcon } from '../icons';
import { theme } from '../theme';

type BottomTabsParams = {
  Home: React.FC;
  History: React.FC;
  Analytics: React.FC;
};

const BottomTabs = createBottomTabNavigator<BottomTabsParams>();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          if (route.name === 'Home') {
            return <HomeIcon width={20} color={theme.colorPurple} />;
          } else {
            return <Text>{route.name}</Text>;
          }
        },
      })}>
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="History" component={History} />
      <BottomTabs.Screen name="Analytics" component={Analytics} />
    </BottomTabs.Navigator>
  );
};
