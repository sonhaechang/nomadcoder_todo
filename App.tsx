import React, { useState } from 'react';
import {
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { theme } from './colors';

StatusBar.setBarStyle('light-content');

function App(): JSX.Element {
	const [working, setWorking] = useState<boolean>(true);
	const traval = () => setWorking(false);
	const work = () => setWorking(true);

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
	}
});

export default App;
