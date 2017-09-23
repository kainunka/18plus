import { Navigation } from 'react-native-navigation';

import Drawer from './_global/Drawer';
import Home from './screens/Home';

export function registerScreens(store, Provider) {
	Navigation.registerComponent('18plus.Home', () => Home, store, Provider);
	Navigation.registerComponent('18plus.Drawer', () => Drawer, store, Provider);
}