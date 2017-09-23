import React, { PropTypes, Component } from 'react';
import {
	Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { Card } from 'react-native-elements'

class CardVideo extends Component {
	render() {
		return (
            <TouchableOpacity
            style={ styles.touchCard }
            onPress={ this.props.onPress }>
                <Card
                image={{ uri: this.props.urlImage }}
                style={ styles.card }
                >
                <Text style={ styles.text }>
                    { this.props.textTitle }
                </Text>
                
                </Card>
            </TouchableOpacity>
        );
	}
}

// Later on in your styles..
var styles = StyleSheet.create({
    touchCard: {
        flex: 1
      }, 
      card: {
        flex: 1, width: '100%', marginLeft: 5,  marginRight: 5
      },
      text: {
        marginBottom: 0, color: '#ffffff'
      }
});


CardVideo.propTypes = {
	
};

export default CardVideo;
