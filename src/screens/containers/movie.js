import React, { Component }  from 'react'; 
import MovieLayout from '../components/movie-layout';
import Player from '../../player/containers-classes/player'; 
import Header from '../../sections/header';
import Close from '../../sections/close'; 
import { connect } from 'react-redux';
class Movie extends Component {
// this is an acttion and it will be connected to our store. 
    closeVideo = () => {
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE', 
            payload: {
                movie: null, 
            }
        })
    }
    render() {
        return (
            <MovieLayout>
                <Header>
                    <Close 
                        onPress={this.closeVideo}
                    />
                </Header>
                {/*  <Player /> */}
            </MovieLayout>
        )
    }
}


export default connect()(Movie); 