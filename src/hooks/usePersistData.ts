import AsyncStorage from '@react-native-async-storage/async-storage';

type UsePersistDataProps = {
  keyName: string;
};

export const usePersistData = ({ keyName }: UsePersistDataProps) => {
  const key = keyName;
  const setData = async <T>(data: T): Promise<void> => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (err) {
      const error = err as Error;
      console.error(error.message);
    }
  };
  return { setData };
};
