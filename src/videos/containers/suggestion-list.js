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
class SuggestionList extends Component {
// creamos una funcion 
renderEmpty = () => <Empty text="No hay sugerencias :("/>
render() {
    const list  = [
        /* {
            key: '1',
            title: 'Titulo', 
        }, 
        {
            key: '2', 
            title: 'Otro Titulo'
        } */
    ]

    // return an array 
    return (
        <Layout  title="Recomendado para ti">
            <FlatList 
            // data and renderItem are properties from Flatlist   
            data={list}   
            // a component to say that there is not element in list
            ListEmptyComponent={this.renderEmpty} 
            renderItem={({ item }) => <Text>{ item.title }</Text>}
             />
        </Layout>

      
    )

}
}

export default SuggestionList