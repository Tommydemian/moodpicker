import React, { useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  LayoutAnimation,
} from 'react-native';
import format from 'date-fns/format';
import { MoodOptionWithTimestamp } from '../../types/index';
import { theme } from '../../theme/index';
import { useMoodContext } from '../../contexts/MoodContext';

type MoodItemRowProps = {
  item: MoodOptionWithTimestamp;
};

export const MoodItemRow: React.FC<MoodItemRowProps> = ({ item }) => {
  const { handleDeleteMood } = useMoodContext();

  // add useCallback to delete functionality
  const handleDelete = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    handleDeleteMood(item);
  }, [handleDeleteMood, item]);

  return (
    <View style={styles.moodItem}>
      <View style={styles.iconAndDescription}>
        <Text style={styles.moodValue}>{item.mood.emoji}</Text>
        <Text style={styles.moodDescription}>{item.mood.description}</Text>
      </View>
      <Text style={styles.moodDate}>
        {format(new Date(item.timestamp), "dd MMM, yyyy 'at' h:mmaaa")}
      </Text>
      <Pressable onPress={handleDelete}>
        <Text style={styles.deleteText}>Delete</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  moodValue: {
    textAlign: 'center',
    fontSize: 40,
    marginRight: 10,
  },
  moodDate: {
    textAlign: 'center',
    color: theme.colorLavender,
  },
  moodItem: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moodDescription: {
    fontSize: 18,
    color: theme.colorPurple,
    fontWeight: 'bold',
    fontFamily: theme.fontFamilyRegular,
  },
  iconAndDescription: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteText: {
    fontFamily: theme.fontFamilyBold,
    color: theme.colorBlue,
  },
});
