import React from 'react';
import { TouchableOpacity } from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

type UpdateToDoProps = {
    isUpdate: boolean;
    setIsUpdate: any;
    setText: any;
    text: string;
};

function UpdateToDo({ isUpdate, setIsUpdate, setText, text }: UpdateToDoProps): JSX.Element {
    const onPress = () => {
		setIsUpdate(!isUpdate);
		setText(text);
	}


    return (
        <TouchableOpacity onPress={onPress}>
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
                        color='white'
                    />
                )
            }
        </TouchableOpacity>
    )
}

export default UpdateToDo;