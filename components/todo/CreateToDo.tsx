import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { saveToDos } from '../../utils/storage';

type CreateToDoProps = {
    working: boolean;
    toDos: any;
    setToDos: any
};

function CreateToDo({ working, toDos, setToDos }: CreateToDoProps): JSX.Element {
    const [text, setText] = useState<string>('');

    const onChangeText = (e: any) => setText(e);

    const createToDo = async () => {
		try {
			if (text !== '') {
				const newToDos = {
					...toDos, 
					[Date.now()]: { text, working, finished: false }
				}
		
				setToDos(newToDos);
				await saveToDos(newToDos);
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
            placeholder={working ? 'Add a To Do' : 'where do you want to go?'}
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