import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { saveStorage } from '../utils/storage';
import { theme } from '../colors';

type HeaderProps = {
    currentPage: string;
    setCurrentPage: any;
};

function Header({ currentPage, setCurrentPage }: HeaderProps): JSX.Element {
    const traval = async () => {
        const page = 'traval';
        setCurrentPage(page);
        await saveStorage('page', page);
    };
    
	const work = async () => {
        const page = 'work';
        setCurrentPage(page);
        await saveStorage('page', page);
    };

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={work}>
                <Text 
                    style={{ 
                        ...styles.btnText, 
                        color: currentPage === 'work' ? 'white' : theme.grey 
                    }}
                >
                    Work
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={traval}>
                <Text 
                    style={{ 
                        ...styles.btnText,
                        color: currentPage === 'traval' ? 'white' : theme.grey 
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