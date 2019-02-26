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
        return (
            <Home>
                <Text>header</Text>
                  {/*  <Player /> */}
                <Text>buscador</Text>
                <CategoryList />
                <SuggestionList/>
              </Home>
        )
    }
 }


 export default connect(null)(AppLayout); 