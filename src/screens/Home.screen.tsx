import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Components
import { MoodPicker } from '../components/MoodPicker';
import { MoodItemRow } from '../components/UI/MoodItemRow';

import { MoodOption, MoodOptionWithTimestamp } from '../types';
import { useMoodContext } from '../contexts/MoodContext';

export const Home: React.FC = () => {
  //   const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  //   const handleSelectMood = useCallback((selectedMood: MoodOption) => {
  //     setMoodList(current => [
  //       ...current,
  //       { mood: selectedMood, timestamp: Date.now() },
  //     ]);
  //   }, []);

  const { handleSelectMood, moodList } = useMoodContext();

  return (
    <View style={styles.container}>
      <MoodPicker handleSelectedMood={handleSelectMood} />
      {moodList.map((mood: MoodOptionWithTimestamp) => (
        <MoodItemRow item={mood} key={mood.timestamp} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
