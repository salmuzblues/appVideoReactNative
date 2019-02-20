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
import VerticalSeparator from '../components/vertical-separator';
// import suggestion pictures of movies and information 
import Suggestion from '../components/suggestion';

class SuggestionList extends Component {
// creamos una funcion 
renderEmpty = () => <Empty text="No hay sugerencias :("/>
itemSeparator = () => <VerticalSeparator /> // aqui le puedes pasar a (props.color)  like this color='red'
renderItem = ({item}) => {
    return (
        /* split operator */
        <Suggestion {...item}/>
    )
}

render() {
    const list  = [
        {
            key: '1',
            title: 'Back to the Future', 
        }, 
        {
            key: '2', 
            title: 'Pokemon'
        }
    ]

    // return an array 
    return (
        <Layout  title="Recomendado para ti">
            <FlatList 
            // data and renderItem are properties from Flatlist   
            data={list}   
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

export default SuggestionList