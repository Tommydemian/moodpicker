import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { moodOptions } from '../constants/moodOptions';
import { MoodOption } from '../types/index';
// Theme
import { theme } from '../theme/index';

type MoodPickerProps = {
  handleSelectedMood: (selectedMood: MoodOption) => void;
};

const srcImage = require('../assets/images/butterflies.png');

export const MoodPicker: React.FC<MoodPickerProps> = ({
  handleSelectedMood,
}) => {
  const [selectedMood, setSelectedMood] = useState<MoodOption>();
  const [hasSelected, setHasSelected] = useState(false);

  // Fucntion to handlePress
  const handlePress = useCallback((el: MoodOption) => {
    if (!el) {
      console.warn('Element is not defined.');
      return;
    }
    setSelectedMood(el);
  }, []);

  // Function to handle select submission
  const handleSelect = useCallback(() => {
    if (selectedMood) {
      handleSelectedMood(selectedMood);
      setSelectedMood(undefined);
      setHasSelected(true);
    }
  }, [handleSelectedMood, selectedMood]);

  if (hasSelected) {
    return (
      <View style={styles.container}>
        <Image source={srcImage} style={styles.image} />
        <Pressable
          onPress={() => setHasSelected(false)}
          style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Choose Another</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How are you right now?</Text>
      <View style={styles.itemContainer}>
        {moodOptions.map(el => (
          <View key={el.emoji}>
            <Pressable
              style={[
                styles.moodItem,
                el.emoji === selectedMood?.emoji
                  ? styles.selectedMoodItem
                  : undefined,
              ]}
              onPress={() => handlePress(el)}>
              <Text>{el.emoji}</Text>
            </Pressable>
            <View>
              <Text style={styles.descriptionText}>
                {selectedMood === el && el.description}
              </Text>
            </View>
          </View>
        ))}
      </View>
      <Pressable onPress={handleSelect} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Choose</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: theme.colorPurple,
    borderWidth: 2,
    margin: theme.space10,
    borderRadius: theme.space10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: theme.space10,
    color: theme.colorWhite,
    fontFamily: theme.fontFamilyBold,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  moodItem: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 5,
  },
  selectedMoodItem: {
    borderWidth: 2,
    backgroundColor: theme.colorPurple,
    borderColor: theme.colorWhite,
  },
  descriptionText: {
    fontWeight: '600',
    textAlign: 'center',
    color: theme.colorPurple,
    fontFamily: theme.fontFamilyBold,
  },
  submitButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: theme.colorPurple,
    width: '50%',
    alignSelf: 'center',
    borderRadius: 20,
    marginVertical: theme.space10,
  },
  submitButtonText: {
    color: theme.colorWhite,
    textAlign: 'center',
    fontSize: 15,
    fontFamily: theme.fontFamilyBold,
  },
  image: {
    alignSelf: 'center',
  },
});
