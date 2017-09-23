import React, { Component, PropTypes } from 'react';
import {
	Text,
	View,
	TouchableOpacity,
	ToastAndroid,
	ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles/Drawer';
import { connect } from 'react-redux';

class Drawer extends Component {
	constructor(props) {
		super(props);

		this._goToHome = this._goToHome.bind(this);
		this._goTo = this._goTo.bind(this);
	}

	_goToHome() {
		this._toggleDrawer();
		this.props.navigator.popToRoot({
			screen: '18plus.Home'
		});
	}

	_goTo(screen, title) {
		this._toggleDrawer();
		this.props.navigator.showModal({
			screen,
			title
		});
	}

	_toggleDrawer() {
		this.props.navigator.toggleDrawer({
			to: 'closed',
			side: 'left',
			animated: true
		});
	}

	render() {
		const iconHome = (<Icon name="md-home" size={26} color="#9F9F9F" style={[styles.drawerListIcon, { paddingLeft: 2 }]} />);
		
		return (
			
			<LinearGradient colors={['rgba(0, 0, 0, 0.7)', 'rgba(0,0,0, 0.9)', 'rgba(0,0,0, 1)']} style={styles.linearGradient}>
				<View style={styles.container}>
					<ScrollView>
					    <View style={styles.drawerList}>
                            <View style={styles.drawerListItem}>
                                
                            </View>
                            <TouchableOpacity onPress={this._goToHome}>
                                <View style={styles.drawerListItem}>
                                    {iconHome}
                                    <Text style={styles.drawerListItemText}>
                                        Home
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
				    </ScrollView>
					<Text style={styles._version}>
						{/* 'v1.0.0' */}
					</Text>
				</View>
			</LinearGradient>
		);
	}
}

Drawer.propTypes = {
	navigator: PropTypes.object
};

mapStatetoProps = (state, ownProps) => {
    return {
        auth: state.start.auth
    }
} 

export default connect(mapStatetoProps)(Drawer);