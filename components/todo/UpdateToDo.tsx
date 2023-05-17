import React from 'react';
import { TouchableOpacity } from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { theme } from '../../colors';

type UpdateToDoProps = {
    isUpdate: boolean;
    setIsUpdate: any;
    setText: any;
    text: string;
    isFinished: boolean;
};

function UpdateToDo({ 
    isUpdate, 
    setIsUpdate, 
    setText, 
    text, 
    isFinished }: UpdateToDoProps): JSX.Element {
        
    const onPress = () => {
		setIsUpdate(!isUpdate);
		setText(text);
	}

    return (
        <TouchableOpacity 
            onPress={onPress}
            disabled={isFinished}>
            {
                isUpdate ?
                (
                    <IoniconsIcon 
                        name='close-circle'
                        size={15} 
                        color='white'
                    />
                ) :
                (
                    <IoniconsIcon 
                        name='pencil'
                        size={15} 
                        color={isFinished ? theme.grey : 'white'}
                    />
                )
            }
        </TouchableOpacity>
    )
}

export default UpdateToDo;