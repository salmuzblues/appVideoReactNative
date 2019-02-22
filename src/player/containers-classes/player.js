import React, { Component }from 'react'; 
import Video from 'react-native';
import {
     StyleSheet
}from 'react-native';
import Layout from '../../player/components/layout'; 

class Player extends Component{
    render() {
        return (
            <Layout
                video={
                    <Video
                        source= {{ uri: 'Insert your URL ' }}
                        style= {styles.video}
                         resizeMode="contain" // this rezing the video,. also "cover" then it will take all width flex 
                        /> 
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