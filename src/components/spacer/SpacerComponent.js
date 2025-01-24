import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Space } from '../../infrastructure/theme/Spacing';

const sizeVariant = {
	small: Space[1],
	medium: Space[2],
	large: Space[3],
};

const positionVariant = {
	top: 'marginTop',
	left: 'marginLeft',
	right: 'marginRight',
	bottom: 'marginBottom',
};

export const Spacer = ({ position = 'top', size = 'small', children }) => {
	const style = {
		[positionVariant[position]]: sizeVariant[size],
	};

	return <View style={style}>{children}</View>;
};
