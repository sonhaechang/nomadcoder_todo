import React, { useState } from 'react';
import {
	Alert,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { theme } from './colors';

StatusBar.setBarStyle('light-content');

function App(): JSX.Element {
	const [working, setWorking] = useState<boolean>(true);
	const [text, setText] = useState<string>('');
	const [toDos, setToDos] = useState<object>({});

	const traval = () => setWorking(false);
	const work = () => setWorking(true);
	const onChangeText = (e: any) => setText(e);
	const addToDo = () => {
		if (text === '') {
			return;
		}

		const newToDos = Object.assign({}, toDos, {
			[Date.now()]: { text, work: working },
		})

		setToDos(newToDos);
		setText('');
	};

	return (
		<View style={styles.container}>
			<StatusBar  />
			<View style={styles.header}>
				<TouchableOpacity onPress={work}>
					<Text 
						style={{ 
							...styles.btnText, 
							color: working ? 'white' : theme.gray 
						}}
					>
						Work
					</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={traval}>
					<Text 
						style={{ 
							...styles.btnText,
							color: !working ? 'white' : theme.gray 
						}}
					>
						Travel
					</Text>
				</TouchableOpacity>
			</View>

			<TextInput 
				onChangeText={onChangeText}
				onSubmitEditing={addToDo}
				returnKeyType='done'
				value={text}
				placeholderTextColor='#525868'
				placeholder={
					working ? 'Add a To Do' : 'where do you want to go?'
				}
				style={styles.input} 
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.bg,
		paddingHorizontal: 20,
	},

	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 100,
	},

	btnText: {
		fontSize: 38,
		fontWeight: '600',
	}, 

	input: {
		backgroundColor: '#232937',
		paddingVertical: 15,
		paddingHorizontal: 20,
		borderRadius: 30,
		marginTop: 20,
		fontSize: 18,
		color: 'white',
	}
});

export default App;
