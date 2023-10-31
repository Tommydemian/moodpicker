import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useMoodContext } from '../contexts/MoodContext';
import { MoodItemRow } from '../components/UI/MoodItemRow';
import { MoodOptionWithTimestamp } from '../types/index';

export const History = () => {
  const { moodList } = useMoodContext();

  return (
    <ScrollView>
      {moodList
        .slice()
        .reverse()
        .map((mood: MoodOptionWithTimestamp) => (
          <MoodItemRow item={mood} key={mood.timestamp} />
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
