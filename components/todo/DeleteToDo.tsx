import React from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import { saveStorage } from '../../utils/storage';

type DeleteToDoProps = {
    id: string;
    toDos: any;
    setToDos: any
};

function DeleteToDo({ id, toDos, setToDos }: DeleteToDoProps): JSX.Element {
    const deleteTodo = () => {
		Alert.alert('Delete To Do', 'Are you sure?', [
			{ text: 'Cancel' },
			{
				text: 'Ok',
				// style: "destructive",
				onPress: async () => {
					try {
						const newToDos = { ...toDos };
						delete newToDos[id];
						setToDos(newToDos);
						await saveStorage('todo', newToDos);
					} catch(error) {
						console.log(error);
					}
				},
			},
		]);
	};

    return (
        <TouchableOpacity onPress={deleteTodo}>
            <FontistoIcon 
                name='trash'
                size={15} 
                color='white'
            />
        </TouchableOpacity>
    )
}

export default DeleteToDo;