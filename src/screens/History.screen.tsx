import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useMoodContext } from '../contexts/MoodContext';
import { MoodItemRow } from '../components/UI/MoodItemRow';
import { MoodOptionWithTimestamp } from '../types/index';

export const History = () => {
  const { moodList } = useMoodContext();

  return (
    <View>
      {moodList.map((mood: MoodOptionWithTimestamp) => (
        <MoodItemRow item={mood} key={mood.timestamp} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});
