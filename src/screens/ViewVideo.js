import React, { PropTypes, Component } from 'react';
import {
	Text,
    View,
    StyleSheet,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as startActions from '../redux/actions/start.actions';

class ViewVideo extends Component {
    constructor(props) {
        super(props);
    }


	render() {
		return (
            <View style={ styles.container }>
                <Text style={ styles.text }> Video Player </Text>
            </View>
           
        );
	}
}

ViewVideo.navigatorStyle = {
	navBarTransparent: true,
	drawUnderNavBar: true,
	navBarTranslucent: true,
	statusBarHidden: true,
	navBarTextColor: 'white',
	navBarButtonColor: 'white'
};


// Later on in your styles..
var styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        
        color: '#ffffff',
        fontWeight: 'bold'
    }
});



ViewVideo.propTypes = {
    actions: PropTypes.object.isRequired,
	navigator: PropTypes.object
};


mapStatetoProps = (state, ownProps) => {
    return {
        auth: state.start.auth,
    }
} 
mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(startActions, dispatch),
	};
}


export default connect(mapStatetoProps, mapDispatchToProps)(ViewVideo);
