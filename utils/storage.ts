import AsyncStorage from '@react-native-async-storage/async-storage';
import { TODOS_STORAGE_KEY, CURRENT_PAGE_STORAGE_KEY } from '@env';

export const loadStorage = async (type: string, setStorage: any) => {
    try {
        const data: {} | any = await AsyncStorage.getItem(
            type === 'todo' ? TODOS_STORAGE_KEY : CURRENT_PAGE_STORAGE_KEY
        );

        data && setStorage(JSON.parse(data));
    } catch(error) {
        console.log(error);
    }
};

export const saveStorage = async (type: string, data: any) => {
    try {
        await AsyncStorage.setItem(
            type === 'todo' ? TODOS_STORAGE_KEY : CURRENT_PAGE_STORAGE_KEY, 
            JSON.stringify(data)
        );
    } catch(error) {
        console.log(error);
    }
};