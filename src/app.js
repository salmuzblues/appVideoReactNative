import React, { Component } from 'react'; 
import {
    Text
} from 'react-native';
// message: possible unhandled promise rejection 
//can't find variable store 
// so we need this below
import { connect } from 'react-redux'; 

import Home from './screens/containers/home';
import SuggestionList from './videos/containers/suggestion-list';
import CategoryList from './videos/containers/category-list.js';
import API from '../utils/api'; 
import Movie from './screens/containers/movie';  
import Header from './sections/header';
import Close from './sections/close';

 class AppLayout extends Component {
   
    async componentDidMount() {
  // el dispatch viene junto con las propiedades 
        const categoryList = await API.getMovies();
        this.props.dispatch({
          type: 'SET_CATEGORY_LIST',
          payload: {
            categoryList
          }
        }); 
    
        const suggestionList = await API.getSuggestion(10);
        this.props.dispatch({
          type: 'SET_SUGGESTION_LIST',
          payload: {
              suggestionList
          }
        }); 
    }
        /* console.log(movies);
        console.log(categories); */
       /*  this.setState({
          suggestionList: movies,
          categoryList: categories,
        }) */
    // esto es para poder enviar los elementos 
    // estas acciones voy a redirigir a videos-reduc 

    render() {
      if(this.props.selectedMovie){
         return <Movie />
      }
      return (       
        <Home>
          <Header> 
            <Close />
          </Header>
          <Text>buscador</Text>
          <CategoryList />
          <SuggestionList />
        </Home>
      )
    }
 }


 //esto es para que este disponible dentro de mi componente 
  function mapStateToProps (state) {
    return {
      selectedMovie: state.selectedMovie
    }
  }

 export default connect(mapStateToProps)(AppLayout); 