import React from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
// Components
import { MoodPicker } from '../components/MoodPicker';

import { useMoodContext } from '../contexts/MoodContext';
import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

const ReanimatedPressable = Animated.createAnimatedComponent(Pressable);

const imageUrl =
  'https://images.unsplash.com/photo-1505506874110-6a7a69069a08?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BhY2V8ZW58MHx8MHx8fDA%3D';

export const Home: React.FC = () => {
  const { handleSelectMood } = useMoodContext();

  const shared = useSharedValue(0);

  const style = useAnimatedStyle(
    () => ({
      transform: [{ translateX: shared.value }],
    }),
    [],
  );

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.bgImage} />
      <View style={[StyleSheet.absoluteFill, { justifyContent: 'center' }]}>
        <MoodPicker handleSelectedMood={handleSelectMood} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  bgImage: {
    flex: 1,
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'lime',
  },
});
