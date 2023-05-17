import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DeleteToDo from './DeleteToDo';
import FinishToDo from './FinishToDo';
import UpdateToDo from './UpdateToDo';
import ToDoContent from './ToDoContent';
import { theme } from '../../colors';

type ToDoProps = {
    id: string;
    toDos: any;
    setToDos: any
};

function ToDo({ id, toDos, setToDos }: ToDoProps): JSX.Element {
	const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const [text, setText] = useState<string>(toDos[id].text);

    return (
        <View 
            id={id}
            style={styles.toDo}
        >
            <View style={styles.toDoCheckBoxBlock}>
				<FinishToDo 
					id={id} 
					toDos={toDos} 
					setToDos={setToDos} 
					setIsUpdate={setIsUpdate}
				/>
            </View>

			<ToDoContent 
				id={id} 
				toDos={toDos} 
				setToDos={setToDos} 
				isUpdate={isUpdate} 
				setIsUpdate={setIsUpdate}
				text={text}
    			setText={setText}
			/>

            <View style={styles.toDoBtnGroup}>
				<UpdateToDo 
					isUpdate={isUpdate}
					setIsUpdate={setIsUpdate}
					setText={setText} 
					text={toDos[id].text}
					isFinished={toDos[id].finished}
				/>
				
				<DeleteToDo 
					id={id} 
					toDos={toDos} 
					setToDos={setToDos} 
				/>
            </View>
        </View> 
    );
}

const styles = StyleSheet.create({
	toDo: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: theme.toDoBg,
		marginBottom: 20,
		paddingVertical: 15,
		paddingHorizontal: 20,
		borderRadius: 10,
	},

	toDoCheckBoxBlock: {
		flex: 1
	},

	toDoBtnGroup: {
		flex: 1.5, 
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end'
	}
});

export default ToDo;