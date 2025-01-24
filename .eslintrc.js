// https://docs.expo.dev/guides/using-eslint/
// eslint-disable-next-line no-undef
module.exports = {
	extends: 'expo',
	ignorePatterns: ['/dist/*'],
	rules: {
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
	},
};
