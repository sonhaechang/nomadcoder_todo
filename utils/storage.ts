import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEY } from '@env';

export const loadToDos = async (setToDos: any) => {
    try {
        const s: {} | any = await AsyncStorage.getItem(STORAGE_KEY);
        s && setToDos(JSON.parse(s));
    } catch(error) {
        console.log(error);
    }
};

export const saveToDos = async (toSave: any) => {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    } catch(error) {
        console.log(error);
    }
};