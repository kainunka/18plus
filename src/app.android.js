import React from 'react';

import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import configureStore from './redux/configureStore';


const store = configureStore();
registerScreens(store, Provider);

const navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navigationBarColor: 'black',
	navBarBackgroundColor: '#C62828',
	navBarTextColor: 'white',
	tabBarButtonColor: 'red',
	tabBarSelectedButtonColor: 'red',
	tabBarBackgroundColor: 'white',

};


Navigation.startSingleScreenApp({
screen: {
	screen: '18plus.Home',
	title: '18 PLUS',
	subtitle: 'คลิปโป๊ มากมาย',
	navigatorStyle: {
		navBarTransparent: true,
		drawUnderNavBar: true,
		navBarTranslucent: true,
		statusBarHidden: true,
		navBarTextColor: 'white',
		navBarButtonColor: 'white',
		navBarSubtitleColor: '#D50000',
		navBarLeftButtonColor: 'white'
	},
	navigatorButtons: {
		leftButtons: [
			{
				id: 'sideMenu',
			}
		]
	}
},
drawer: {
	left: {
		screen: '18plus.Drawer',
	},
},
});
