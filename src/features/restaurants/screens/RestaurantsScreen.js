import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Searchbar } from 'react-native-paper';
import { React, useState } from 'react';
import RestaurantInfo from '../components/RestaurantInfoCard';
import { Space } from '../../../infrastructure/theme/Spacing';

const RestaurantScreen = () => {
	const [searchQuery, setSearchQuery] = useState('');

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.searchContainer}>
				<Searchbar placeholder='Search' onChangeText={setSearchQuery} value={searchQuery} />
			</View>
			<View style={styles.listContainer}>
				<RestaurantInfo />
			</View>
		</SafeAreaView>
	);
};

export default RestaurantScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	searchContainer: {
		padding: Space[3],
	},
	listContainer: {
		flex: 1,
		padding: Space[3],
	},
});
