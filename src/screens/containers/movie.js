import React, { Component }  from 'react';
import {
 Text
} from 'react-native';
import MovieLayout from '../components/movie-layout';
import Player from '../../player/containers-classes/player'; 
import Header from '../../sections/header';
import Close from '../../sections/close';
import Details from '../../videos/components/details';  
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
                <Text> PLAYER </Text>
                {/* Vamos a enviar información */}
                <Details {...this.props.movie} /> 
            </MovieLayout>
        )
    }
}

function mapStateToProps (state){
return {
    movie: state.selectedMovie
}
}
export default connect(mapStateToProps)(Movie); 