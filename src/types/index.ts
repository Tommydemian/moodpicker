export type MoodOption = {
  emoji: string;
  description: string;
};

export type MoodOptionWithTimestamp = {
  mood: MoodOption;
  timestamp: number;
};
