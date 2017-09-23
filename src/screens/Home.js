import React, { PropTypes, Component } from 'react';
import {
	Text,
    View,
    StyleSheet
} from 'react-native';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as startActions from '../redux/actions/start.actions';
import Video from 'react-native-video';

class Home extends Component {
    constructor(props) {
        super(props);
    }

	render() {
    
		return (
            
            <Video source={{uri: './Video/01.mp4'}}   // Can be a URL or a local file.
            ref={(ref) => {
                this.player = ref
            }}                                      // Store reference
            rate={1.0}                              // 0 is paused, 1 is normal.
            volume={1.0}                            // 0 is muted, 1 is normal.
            muted={false}                           // Mutes the audio entirely.
            paused={false}                          // Pauses playback entirely.
            resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
            repeat={true}                           // Repeat forever.
            playInBackground={false}                // Audio continues to play when app entering background.
            playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
            ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
            progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
            onLoadStart={this.loadStart}            // Callback when video starts to load
            onLoad={this.setDuration}               // Callback when video loads
            onProgress={this.setTime}               // Callback every ~250ms with currentTime
            onEnd={this.onEnd}                      // Callback when playback finishes
            onError={this.videoError}               // Callback when video cannot be loaded
            onBuffer={this.onBuffer}                // Callback when remote video is buffering
            onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
            style={styles.backgroundVideo} />
 
           
        );
	}
}



// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,

  },
});



Home.propTypes = {
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


export default connect(mapStatetoProps, mapDispatchToProps)(Home);
