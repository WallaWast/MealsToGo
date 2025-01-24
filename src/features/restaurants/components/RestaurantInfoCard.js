import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { Colors } from '../../../infrastructure/theme/Colors';
import { Space } from '../../../infrastructure/theme/Spacing';
import { Fonts } from '../../../infrastructure/theme/Fonts';

const RestaurantInfo = ({ restaurant = {} }) => {
	const {
		name = 'Some Restaurant',
		icon,
		photos = [
			'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
		],
		address = '100 some random street',
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily,
	} = restaurant;

	return (
		<Card elevation={5} style={styles.card}>
			<Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
			<Text style={styles.title}>{name}</Text>
		</Card>
	);
};

export default RestaurantInfo;

const styles = StyleSheet.create({
	card: { backgroundColor: 'white' },
	cover: {
		backgroundColor: 'white',
		padding: Space[3],
	},
	title: {
		paddingHorizontal: Space[3],
		paddingVertical: Space[2],
		color: Colors.ui.primary,
		fontFamily: Fonts.body,
	},
});
