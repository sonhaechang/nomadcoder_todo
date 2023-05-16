import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeleteToDo from './DeleteToDo';
import FinishToDo from './FinishToDo';
import UpdateToDo from './UpdateToDo';
import { theme } from '../../colors';

type ToDoProps = {
    id: string;
    toDos: any;
    setToDos: any
};

function ToDo({ id, toDos, setToDos }: ToDoProps): JSX.Element {
    return (
        <View 
            id={id}
            style={styles.toDo}
        >
            <View style={styles.toDoCheckBoxBlock}>
				<FinishToDo id={id} toDos={toDos} setToDos={setToDos} />
            </View>

            <View style={styles.toDoTextBlock}>
                <Text 
                    style={{
                        ...styles.toDoText,
                        textDecorationLine: toDos[id].finished 
                        ? 'line-through' : 'none',
                    }}
                >
                    {toDos[id].text}
                </Text>
            </View>

            <View style={styles.toDoBtnGroup}>
				<UpdateToDo id={id} toDos={toDos} setToDos={setToDos} />
				<DeleteToDo id={id} toDos={toDos} setToDos={setToDos} />
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

	toDoTextBlock: {
		flex: 10
	},

	toDoText: {
		color: 'white',
		fontSize: 15,
		fontWeight: '500',
	},

	toDoBtnGroup: {
		flex: 1.5, 
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end'
	}
});

export default ToDo;