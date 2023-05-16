import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../colors';

type HeaderProps = {
    working: boolean;
    setWorking: any;
};

function Header({ working, setWorking }: HeaderProps): JSX.Element {
    const traval = () => setWorking(false);
	const work = () => setWorking(true);

    return (
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
    )
}

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 100,
	},

    btnText: {
		fontSize: 38,
		fontWeight: '600',
	},
});

export default Header;