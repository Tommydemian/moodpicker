import AsyncStorage from '@react-native-async-storage/async-storage';

export const useRetrieveData = () => {
  const retrieveData = async (datatKey: string) => {
    try {
      const result = await AsyncStorage.getItem(datatKey);
      if (result) {
        return JSON.parse(result);
      }
    } catch (err) {
      const error = err as Error;
      console.error(error.message);
    }
    return null;
  };
  return { retrieveData };
};
