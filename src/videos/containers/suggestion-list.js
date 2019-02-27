import React, { Component } from 'react'; 
import {
    FlatList,
    Text
} from 'react-native'; 
// Importando el Layout suggestion-list
// el nombre de Layout puede ser cualquiera, pero se recomienda Layout 
import Layout from '../components/suggestion-list-layout'; 
// Importando el component Empty 
import Empty from '../components/empty';
import VerticalSeparator from '../../sections/vertical-separator';
// import suggestion pictures of movies and information 
import Suggestion from '../components/suggestion';
import { connect } from 'react-redux'; 

function mapStateToProps (state) {
    return{
        list: state.suggestionList 
    }
}

class SuggestionList extends Component {
// creamos funciones 
keyExtractor = (item) => item.id.toString(); // esto es para poder eliminar el miss Key menasje que sale en el emulador. 
renderEmpty = () => <Empty text="No hay sugerencias :("/>
viewMovie = (item) => {
     this.props.dispatch({
         type: 'SET_SELECTED_MOVIE',
         payload: {
             movie: item
         }
     })
}
itemSeparator = () => <VerticalSeparator /> // aqui le puedes pasar a (props.color)  like this color='red'
renderItem = ({item}) => {
    return (
        /* split operator */
        <Suggestion 
            {...item}
            onPress={()=> { this.viewMovie(item) }}
        />
    )
}

    render() {
        // return an array 
        return (
            <Layout  title="Recomendado para ti">
                <FlatList 
                // Para poder substraer el Key 
                keyExtractor = {this.keyExtractor}
                // data and renderItem are properties from Flatlist   
                data={this.props.list}   
                // a component to say that there is not element in list
                ListEmptyComponent={this.renderEmpty}
                // another component to separate the row from my list 
                ItemSeparatorComponent={this.itemSeparator} // we pass function   
                renderItem={this.renderItem}  
                />
            </Layout>  
        )
    }
}

export default connect(mapStateToProps)(SuggestionList);