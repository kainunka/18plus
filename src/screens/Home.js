import React, { PropTypes, Component } from 'react';
import {
	Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as startActions from '../redux/actions/start.actions';
import Video from 'react-native-video';
import { Card } from 'react-native-elements';
import CardVideo from './components/CardVideo';

class Home extends Component {
    constructor(props) {
        super(props);

        this.viewVideo = this.viewVideo.bind(this);
    }

    viewVideo() {
        this.props.navigator.showModal({
            title: 'Video',
            screen: '18plus.ViewVideo'
        })
    }

	render() {
		return (
            <View style={styles.absolute}>
                <Video source={ require('./Video/01.mp4' )}   // Can be a URL or a local file.
                    ref={(ref) => {
                        this.player = ref
                    }}                                      // Store reference
                    rate={1.0}                              // 0 is paused, 1 is normal.
                    volume={1.0}                            // 0 is muted, 1 is normal.
                    muted={true}                           // Mutes the audio entirely.
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
                    style={styles.absolute} 
                   
                />
                <ScrollView>
                <View style={ styles.containerPage }>
                    <View style={ styles.topPage } />
                    <View style={ styles.slideImage } >
                        <Image source={{ uri: 'https://i.ytimg.com/vi/DrxtYpASy5o/maxresdefault.jpg' }} style={styles.backgroundImage} />
                    </View>

                    <View style={ styles.content }>
                        <Text style={styles.textHeader}>
                            NEW VIDEO!
                        </Text>
                    </View>

                    <View style={ styles.content }>
                        <View style={ styles.element }>
                            <CardVideo
                            urlImage='https://ae01.alicdn.com/kf/HTB1PnknKFXXXXbCXVXXq6xXFXXXn/-font-b-Sexy-b-font-jumpsuit-v-neck-sleeveless-font-b-camouflage-b-font-font.jpg'
                            textTitle='Video1'
                            onPress={ this.viewVideo.bind(this) }
                            />
                            <CardVideo
                            urlImage='http://picture-cdn.wheretoget.it/ky9x2b-l-610x610-romper-camo-camo-camo+crop-cropped-cropped+hoodie-camo+hoodie-sexy+piece-camouflage+piece-piece-set--bottoms-camouflage-camo+shorts-camouflage+shorts-camo+piece-sexy-ogv-ogvibes-sh.jpg'
                            textTitle='Video2'
                            onPress={ this.viewVideo.bind(this) }
                            />
                            <CardVideo
                            urlImage='http://litbimg7.rightinthebox.com/images/384x384/201611/alfzqd1479983107847.jpg'
                            textTitle='Video3'
                            onPress={ this.viewVideo.bind(this) }
                            />
                        </View>
                    </View>

                    <View style={ styles.content }>
                        <Text style={styles.textHeader}>
                            VIP HOT!
                        </Text>
                    </View>
                    
                    <View style={ styles.content }>
                        <View style={ styles.element }>
                            <CardVideo
                            urlImage='https://ae01.alicdn.com/kf/HTB1b6quHVXXXXb7XFXXq6xXFXXXO/Plus-Size-Extra-Large-Over-fat-big-Size-Cup-VIP-0695B-Free-shipping-2015-Sexy-Swimwear.jpg'
                            textTitle='Video1'
                            onPress={ this.viewVideo.bind(this) }
                            />
                            <CardVideo
                            urlImage='https://i.pinimg.com/736x/3d/ef/be/3defbe7ca04500c7cc600cfec21ec3a7--plunge-bra-dahlias.jpg'
                            textTitle='Video2'
                            onPress={ this.viewVideo.bind(this) }
                            />
                            <CardVideo
                            urlImage='http://media.adoreme.com/media/catalog/product/a/d/adore-me_ms-tress_96_beth_thong_0030_web_beth-very-sexy-blue-spring-bras-and-panties-for-women_2_.jpg'
                            textTitle='Video3'
                            onPress={ this.viewVideo.bind(this) }
                            />
                        </View>
                    </View>


                    <View style={ styles.content }>
                        <Text style={styles.textHeader}>
                            CATEGORY
                        </Text>
                    </View>
                    
                    <View style={ styles.content }>
                        <View style={ styles.element }>
                            <CardVideo
                            urlImage='https://ae01.alicdn.com/kf/HTB1ojEoKXXXXXc1XXXXq6xXFXXXw/Bra-brief-sets-sexy-bra-sets-Ultrathin-and-transparent-sexy-lace-embroidery-underwear-sets-women-lace.jpg'
                            textTitle='Video1'
                            onPress={ this.viewVideo.bind(this) }
                            />
                            <CardVideo
                            urlImage='https://images.yoins.com/thumb/big/oaupload/yoins/images/27/60/1f309738-67ed-4e7a-8cb1-a04fbf1df1dc.JPG'
                            textTitle='Video2'
                            onPress={ this.viewVideo.bind(this) }
                            />
                            <CardVideo
                            urlImage='http://www3.pictures.zimbio.com/gi/Kate+Upton+Beach+Bunny+Swimwear+Runway+MBFW+HbHiXDjK-QQl.jpg'
                            textTitle='Video3'
                            onPress={ this.viewVideo.bind(this) }
                            />
                        </View>


                        <View style={ styles.element }>
                            <CardVideo
                            urlImage='https://www.amiclubwear.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/w/swimsuit-twopiece-kk89s-z8891beige.jpg'
                            textTitle='Video4'
                            onPress={ this.viewVideo.bind(this) }
                            />
                            <CardVideo
                            urlImage='http://im.ziffdavisinternational.com/ign_es/screenshot/default/ariadna-28-11-15-800x500_m6bm.jpg'
                            textTitle='Video5'
                            onPress={ this.viewVideo.bind(this) }
                            />
                            <CardVideo
                            urlImage='http://zebrasbox.com/foto_prod_n/body-sexy-excellent-beauty-b-215_zebrasbox-com-88728-a3.jpg'
                            textTitle='Video6'
                            onPress={ this.viewVideo.bind(this) }
                            />
                        </View>
                        
                    </View>
 
                
                </View>
                </ScrollView>
            </View>
           
        );
	}
}


// Later on in your styles..
var styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  containerPage: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  topPage: {
    width: '100%',
    height: 70,
    backgroundColor: 'transparent'
  },
  slideImage: {
    width: '95%',
    height: 200, 
    backgroundColor: '#000000',
    marginBottom: 15,
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  content: {
    width: '95%',
  },
  element: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textHeader: {
    color: '#FF1744',
    marginBottom: 15,
    marginLeft: 5,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20
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
