import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabsNavigator } from './navigation/BottomTabs.navigator';

import { MoodProvider } from './contexts/MoodContext';

export const App: React.FC = () => {
  return (
    <MoodProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </MoodProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
  },
});
