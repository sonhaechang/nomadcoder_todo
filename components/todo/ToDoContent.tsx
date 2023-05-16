import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { saveToDos } from '../../utils/storage';
import { theme } from '../../colors';

type ToDoContentProps = {
    id: string,
    toDos: any,
    setToDos: any,
    isUpdate: boolean,
    setIsUpdate: any,
    text: string, 
    setText: any, 
};

function ToDoContent(
    { id, toDos, setToDos, isUpdate, setIsUpdate, text, setText }: 
    ToDoContentProps): JSX.Element {

    const onChangeText = (e: any) => setText(e);

    const updateTodo = async () => {
        try {
            if (text !== '') {
                const newToDos = { ...toDos };
                newToDos[id].text = text;						
                setToDos(newToDos);
                await saveToDos(newToDos);
                setIsUpdate(false);
            }
		} catch(error) {
			console.log(error);
		}
    };
        
    return (
        <View style={styles.toDoTextBlock}>
            { 
                isUpdate ? 
                (
                    <TextInput 
                        onChangeText={onChangeText}
                        onSubmitEditing={updateTodo}
                        returnKeyType='done'
                        placeholderTextColor={theme.grey}
                        placeholder='Enter the content to be modified'
                        value={text}
                        style={styles.toDoInput} 
                    />
                ) :
                (
                    <Text 
                        style={{
                            ...styles.toDoText,
                            textDecorationLine: toDos[id].finished 
                            ? 'line-through' : 'none',
                        }}
                    >
                        {toDos[id].text}
                    </Text>
                ) 
            }
        </View>
    );
}

const styles = StyleSheet.create({
	toDoTextBlock: {
		flex: 10
	},

    toDoInput: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
		borderRadius: 5,
		fontSize: 15,
        color: 'white',
	},

	toDoText: {
		color: 'white',
		fontSize: 15,
		fontWeight: '500',
	},
});

export default ToDoContent;