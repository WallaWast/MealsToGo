import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { Colors } from '../../../infrastructure/theme/Colors';
import { Space } from '../../../infrastructure/theme/Spacing';
import { Fonts, FontSizes } from '../../../infrastructure/theme/Fonts';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';

const RestaurantInfo = ({ restaurant = {} }) => {
	const {
		name = 'Some Restaurant',
		icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
		photos = [
			'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
		],
		address = '100 some random street',
		isOpenNow = true,
		rating = 4,
		isClosedTemporarily = false,
	} = restaurant;

	const ratingArray = Array.from(new Array(Math.floor(rating)));

	return (
		<Card elevation={5} style={styles.card}>
			<Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
			<View style={styles.info}>
				<Text style={styles.title}>{name}</Text>
				<View style={styles.ratingOpen}>
					<View style={styles.rating}>
						{ratingArray.map((_, index) => (
							<SvgXml key={`star-${index}`} xml={star} width={20} height={20} />
						))}
					</View>
					<View style={styles.openedInfo}>
						{isClosedTemporarily && (
							<View>
								<Text style={styles.closedTemporarily}>CLOSED TEMPORARILY</Text>
							</View>
						)}
						{isOpenNow && <SvgXml xml={open} width={20} height={20} />}
						<Image style={styles.closedIcon} source={{ uri: icon }} />
					</View>
				</View>
				<Text style={styles.address}>{address}</Text>
			</View>
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
		color: Colors.ui.primary,
		fontFamily: Fonts.heading,
		fontSize: FontSizes.body,
	},
	ratingOpen: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	openedInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		gap: 10,
	},
	closedTemporarily: {
		color: 'red',
	},
	closedIcon: {
		width: 15,
		height: 15,
	},
	rating: {
		flexDirection: 'row',
		paddingTop: Space[2],
		paddingBottom: Space[2],
	},
	info: {
		paddingHorizontal: Space[3],
		paddingVertical: Space[2],
	},
	address: {
		fontFamily: Fonts.body,
		fontSize: FontSizes.caption,
	},
});
