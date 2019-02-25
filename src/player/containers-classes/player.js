import React, { Component }from 'react'; 
import Video from 'react-native';
import {
     StyleSheet,
     ActivityIndicator,
     Text
}from 'react-native';
import Layout from '../../player/components/layout'; 
import ControlLayout from '../components/control-layout';
import PlayPause  from '../components/play-pause';

class Player extends Component{
    // we are setting a state = true, because our video is going to start charging. 
    state = {
        loading: true,
        paused: false    
    }
    onBuffer = ({isBuffering}) => {
        this.setState({
            loading: isBuffering
        })
    }; 
    // this is another way to remove the Loader 
    onLoad = () => {
        this.setState({
            loading: false
        })
    }
    playPause = () => {
        this.setState({
            paused: !this.state.paused
        })

    } 
    render() {
        return (
            <Layout
                loading= { this.state.loading }
                video={
                    <Video
                        source= {{ uri: 'Insert your URL ' }}
                        style= {styles.video}
                        resizeMode="contain" // this rezing the video,. also "cover" then it will take all width flex 
                        onBuffer={this.onBuffer}
                        onLoad= {this.onLoad}
                        paused={this.state.paused}
                    /> 
                    }
                // this is for icno loader.     
                loader={
                   <ActivityIndicator color="red"/> 
                }
                controls= {
                    <ControlLayout>
                        <PlayPause 
                        onPress ={this.playPause}
                        paused= {this.state.paused}
                        /> 
                        <Text>progres Bar </Text>
                        <Text>time Left </Text>
                        <Text>full screen </Text>
                    </ControlLayout>
                }
                >        
            </Layout>
        )
    }
}

const styles = StyleSheet.create({
    video: 
    {
        positon: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0

    }
}); 

export default Player; 