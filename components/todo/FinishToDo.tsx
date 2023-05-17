import React from 'react';
import { TouchableOpacity } from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { saveStorage } from '../../utils/storage';

type FinishToDoProps = {
    id: string;
    toDos: any;
    setToDos: any
};

function FinishToDo({ id, toDos, setToDos }: FinishToDoProps): JSX.Element {
    const finishTodo = async () => {
		try {
			const newToDos = { ...toDos };
			newToDos[id].finished = !newToDos[id].finished;						
			setToDos(newToDos);
			await saveStorage('todo', newToDos);
		} catch(error) {
			console.log(error);
		}
	};

    return (
        <TouchableOpacity onPress={finishTodo}>
            <IoniconsIcon 
                name={
                    toDos[id].finished === true ?
                    'checkbox' :
                    'checkbox-outline'
                }
                size={15} 
                color='white' 
            />
        </TouchableOpacity>
    )
}

export default FinishToDo;