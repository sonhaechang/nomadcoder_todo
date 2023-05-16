import React, { useEffect, useState } from 'react';
import {
	Alert,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { theme } from './colors';

StatusBar.setBarStyle('light-content');

const STORAGE_KEY = "@toDos";

function App(): JSX.Element {
	const [working, setWorking] = useState<boolean>(true);
	const [text, setText] = useState<string>('');
	const [toDos, setToDos] = useState<{} | any>({});

	const traval = () => setWorking(false);
	const work = () => setWorking(true);
	const onChangeText = (e: any) => setText(e);

	const loadToDos = async () => {
		try {
			const s: {} | any = await AsyncStorage.getItem(STORAGE_KEY);
			s && setToDos(JSON.parse(s));
		} catch(error) {
			console.log(error);
		}
	};

	const addToDo = async () => {
		try {
			if (text !== '') {
				const newToDos = {
					...toDos, 
					[Date.now()]: { text, working }
				}
		
				setToDos(newToDos);
				await saveToDos(newToDos);
				setText('');		
			}
		} catch(error) {
			console.log(error);
		}
	};

	const saveToDos = async (toSave: any) => {
		try {
			await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
		} catch(error) {
			console.log(error);
		}
	};

	const deleteTodo = (id: string) => {
		Alert.alert("Delete To Do", "Are you sure?", [
			{ text: "Cancel" },
			{
				text: "Ok",
				// style: "destructive",
				onPress: async () => {
					try {
						const newToDos = { ...toDos };
						delete newToDos[id];
						setToDos(newToDos);
						await saveToDos(newToDos);
					} catch(error) {
						console.log(error);
					}
				},
			},
		]);
	};

	useEffect(() => {
		loadToDos();
	}, []);

	return (
		<View style={styles.container}>
			<StatusBar  />
			<View style={styles.header}>
				<TouchableOpacity onPress={work}>
					<Text 
						style={{ 
							...styles.btnText, 
							color: working ? 'white' : theme.grey 
						}}
					>
						Work
					</Text>
				</TouchableOpacity>

				<TouchableOpacity onPress={traval}>
					<Text 
						style={{ 
							...styles.btnText,
							color: !working ? 'white' : theme.grey 
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
				clearButtonMode='always'
				placeholder={working ? 'Add a To Do' : 'where do you want to go?'}
				value={text}
				style={styles.input} 
			/>

			<ScrollView>
				{Object.keys(toDos).map(key => 
					toDos[key].working === working ?
					(
						<View 
							key={key}
							style={styles.toDo}
						>
							<Text style={styles.toDoText}>
								{toDos[key].text}
							</Text>
							<TouchableOpacity onPress={() => deleteTodo(key)}>
								<Text>❌</Text>
							</TouchableOpacity>
						</View> 
					) : null
				)}
			</ScrollView>
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
		backgroundColor: 'white',
		paddingVertical: 15,
		paddingHorizontal: 20,
		borderRadius: 10,
		marginVertical: 20,
		fontSize: 15,
	},

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

	toDoText: {
		color: 'white',
		fontSize: 15,
		fontWeight: '500',
	}
});

export default App;
