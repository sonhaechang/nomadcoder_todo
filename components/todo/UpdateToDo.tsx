import React from 'react';
import { TouchableOpacity } from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { saveToDos } from '../../utils/storage';

type UpdateToDoProps = {
    id: string;
    toDos: any;
    setToDos: any
};

function UpdateToDo({ id, toDos, setToDos }: UpdateToDoProps): JSX.Element {
    const updateTodo = async () => {
        console.log(id);
    };

    return (
        <TouchableOpacity onPress={updateTodo}>
            <IoniconsIcon 
                name='pencil'
                size={15} 
                color='white'
            />
        </TouchableOpacity>
    )
}

export default UpdateToDo;