import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';

const defaultTextStyles = {
	fontFamily: 'System', // Replace with `theme.fonts.body`
	fontWeight: '400', // Replace with `theme.fontWeights.regular`
	color: '#000000', // Replace with `theme.colors.text.primary`
	flexWrap: 'wrap',
	marginTop: 0,
	marginBottom: 0,
};

const styles = StyleSheet.create({
	body: {
		...defaultTextStyles,
		fontSize: 16, // Replace with `theme.fontSizes.body`
	},
	hint: {
		...defaultTextStyles,
		fontSize: 16, // Replace with `theme.fontSizes.body`
	},
	error: {
		...defaultTextStyles,
		color: 'red', // Replace with `theme.colors.text.error`
	},
	caption: {
		...defaultTextStyles,
		fontSize: 12, // Replace with `theme.fontSizes.caption`
		fontWeight: '700', // Replace with `theme.fontWeights.bold`
	},
	label: {
		fontFamily: 'System', // Replace with `theme.fonts.heading`
		fontSize: 16, // Replace with `theme.fontSizes.body`
		fontWeight: '500', // Replace with `theme.fontWeights.medium`
	},
});

const variants = {
	body: styles.body,
	label: styles.label,
	caption: styles.caption,
	error: styles.error,
	hint: styles.hint,
};

export const Text = ({ variant = 'body', style, children, ...props }) => {
	return (
		<RNText style={[variants[variant], style]} {...props}>
			{children}
		</RNText>
	);
};
