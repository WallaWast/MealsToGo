import React from 'react';
import { StatusBar } from 'expo-status-bar';
import RestaurantScreen from './src/features/restaurants/screens/RestaurantsScreen';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

export default function App() {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular,
	});
	const [latoLoaded] = useLato({
		Lato_400Regular,
	});

	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}

	return (
		<>
			<RestaurantScreen />
			<StatusBar style='auto' />
		</>
	);
}
