import React, { Component }  from 'react';
import {
 Text,
 Animated
} from 'react-native';
import { connect } from 'react-redux';

import MovieLayout from '../components/movie-layout';
import Player from '../../player/containers-classes/player'; 
import Header from '../../sections/header';
import Close from '../../sections/close';
import Details from '../../videos/components/details';  

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
  // creating a initial state 
  state = {  
      opacity: new Animated.Value(0), // valor es desde 0 - 1
  }
// ciclo de vida para modificar 
  componentDidMount(){
      Animated.timing(
          this.state.opacity,
          {
              toValue: 1,
              duration: 1000
          }
      ).start(); // para lanzar el metodo se pone esa función. 
  }
    render() {
        return (
        <Animated.View
            style={{
                flex: 1,  // para que ocupe todo el espacio
                opacity: this.state.opacity,
            }}
        >  
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
        </Animated.View>  
        )
    }
}

function mapStateToProps (state){
return {
    movie: state.selectedMovie
}
}
export default connect(mapStateToProps)(Movie); 