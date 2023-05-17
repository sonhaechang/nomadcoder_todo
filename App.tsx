import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import CreateToDo from './components/todo/CreateToDo';
import ToDos from './components/todo/ToDos';
import { loadStorage } from './utils/storage';
import { theme } from './colors';

StatusBar.setBarStyle('light-content');

function App(): JSX.Element {
	const [currentPage, setCurrentPage] = useState<any>({});
	const [toDos, setToDos] = useState<{} | any>({});
	
	useEffect(() => {
		loadStorage('todo', setToDos);
		loadStorage('page', setCurrentPage);
	}, []);

	return (
		<View style={styles.container}>
			<StatusBar />

			<Header 
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
			
			<CreateToDo 
				currentPage={currentPage}
				toDos={toDos} 
				setToDos={setToDos} 
			/>

			<ToDos 
				toDos={toDos} 
				setToDos={setToDos} 
				currentPage={currentPage}
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
