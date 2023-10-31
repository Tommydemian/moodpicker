import React, {
  createContext,
  useState,
  useCallback,
  ReactNode,
  useContext,
  useEffect,
} from 'react';
// types
import { MoodOptionWithTimestamp, MoodOption } from '../types';
// hooks
import { usePersistData } from '../hooks/usePersistData';
import { useRetrieveData } from '../hooks/useRetrieveData';

type MoodProviderType = {
  children: ReactNode;
};

type MoodContextType = {
  moodList: MoodOptionWithTimestamp[];
  handleSelectMood: (selectedMood: MoodOption) => void;
  handleDeleteMood: (moodToDelete: MoodOptionWithTimestamp) => void;
};

const MoodContext = createContext<MoodContextType>({
  moodList: [],
  handleSelectMood: () => {},
  handleDeleteMood: () => {},
});

export const MoodProvider: React.FC<MoodProviderType> = ({ children }) => {
  const dataKey = 'moodList';
  const { setData } = usePersistData({ keyName: dataKey });
  const { retrieveData } = useRetrieveData();

  const [moodList, setMoodList] = useState<MoodOptionWithTimestamp[]>([]);

  const handleSelectMood = useCallback(
    (selectedMood: MoodOption) => {
      setMoodList(current => {
        const newMoodList = [
          ...current,
          { mood: selectedMood, timestamp: Date.now() },
        ];

        setData(newMoodList);

        return newMoodList;
      });
    },
    [setData],
  );

  const handleDeleteMood = useCallback(
    (mood: MoodOptionWithTimestamp) => {
      setMoodList(current => {
        const newMoodList = current.filter(
          val => val.timestamp !== mood.timestamp,
        );
        setData(newMoodList);

        return newMoodList;
      });
    },
    [setData],
  );

  useEffect(() => {
    const fetchMoodData = async () => {
      const data = await retrieveData(dataKey);
      if (data) {
        setMoodList(data);
      }
    };

    fetchMoodData();
  }, [retrieveData]);

  return (
    <MoodContext.Provider
      value={{ moodList, handleSelectMood, handleDeleteMood }}>
      {children}
    </MoodContext.Provider>
  );
};

export const useMoodContext = () => useContext(MoodContext);
