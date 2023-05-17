import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { saveStorage } from '../../utils/storage';

type CreateToDoProps = {
	currentPage: string;
    toDos: any;
    setToDos: any
};

function CreateToDo({ currentPage, toDos, setToDos }: CreateToDoProps): JSX.Element {
    const [text, setText] = useState<string>('');

    const onChangeText = (e: any) => setText(e);

    const createToDo = async () => {
		try {
			if (text !== '') {
				const newToDos = {
					...toDos, 
					[Date.now()]: { text, currentPage, finished: false }
				}
		
				setToDos(newToDos);
				await saveStorage('todo', newToDos);
				setText('');		
			}
		} catch(error) {
			console.log(error);
		}
	};

    return (
        <TextInput 
            onChangeText={onChangeText}
            onSubmitEditing={createToDo}
            returnKeyType='done'
            clearButtonMode='always'
			placeholder={
				currentPage === 'work' ? 
				'Add a To Do' : 
				'where do you want to go?'
			}
            value={text}
            style={styles.input} 
        />
    )
}

const styles = StyleSheet.create({
	input: {
		backgroundColor: 'white',
		paddingVertical: 15,
		paddingHorizontal: 20,
		borderRadius: 10,
		marginVertical: 20,
		fontSize: 15,
	},
});

export default CreateToDo;