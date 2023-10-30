import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Components
import { Home } from '../screens/Home.screen';
import { History } from '../screens/History.screen';
import { Analytics } from '../screens/Analytics.screen';
import { Text } from 'react-native';
import { AnalyticsIcon, HomeIcon, ListIcon } from '../icons';
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
        tabBarActiveTintColor: theme.colorBlue,
        tabBarInactiveTintColor: theme.colorGrey,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return <HomeIcon width={size} color={color} />;
          }
          if (route.name === 'History') {
            return <ListIcon width={size} color={color} />;
          }
          if (route.name === 'Analytics') {
            return <AnalyticsIcon width={size} color={color} />;
          }
          return <Text>{route.name}</Text>;
        },
      })}>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          title: "Today's Mood",
          headerTitleStyle: { fontFamily: theme.fontFamilyBold },
        }}
      />
      <BottomTabs.Screen
        name="History"
        component={History}
        options={{ title: 'Past Moods' }}
      />
      <BottomTabs.Screen
        name="Analytics"
        component={Analytics}
        options={{ title: 'Fancy Title' }}
      />
    </BottomTabs.Navigator>
  );
};
