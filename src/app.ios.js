import React from 'react';

import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import configureStore from './redux/store/configureStore';


const store = configureStore();
registerScreens(store, Provider);

const navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navigationBarColor: 'black',
	navBarBackgroundColor: '#ffba0b',
	navBarTextColor: 'black',
	tabBarButtonColor: 'red',
	tabBarSelectedButtonColor: 'red',
	tabBarBackgroundColor: 'white',

};


Navigation.startSingleScreenApp({
screen: {
	screen: '18plus.Home',
	title: '18 PLUS',
	navigatorStyle
},
drawer: {
	left: {
		screen: '18plus.Drawer',
	},
},
});
