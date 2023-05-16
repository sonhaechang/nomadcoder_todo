import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import CreateToDo from './components/todo/CreateToDo';
import ToDos from './components/todo/ToDos';
import { loadToDos } from './utils/storage';
import { theme } from './colors';

StatusBar.setBarStyle('light-content');

function App(): JSX.Element {
	const [working, setWorking] = useState<boolean>(true);
	const [toDos, setToDos] = useState<{} | any>({});
	
	useEffect(() => {
		loadToDos(setToDos);
	}, []);

	return (
		<View style={styles.container}>
			<StatusBar  />

			<Header 
				working={working} 
				setWorking={setWorking} 
			/>
			
			<CreateToDo 
				working={working} 
				toDos={toDos} 
				setToDos={setToDos} 
			/>

			<ToDos 
				toDos={toDos} 
				setToDos={setToDos} 
				working={working} 
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
});

export default App;
