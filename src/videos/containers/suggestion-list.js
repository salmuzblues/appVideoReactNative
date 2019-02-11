import React, { Component } from 'react'; 
import {
    FlatList,
    Text
} from 'react-native'; 
class SuggestionList extends Component {
render() {
    const list  = [
        {
            key: '1',
            title: 'leo', 
        }, 
        {
            key: '2', 
            title: 'nidas'
        }
    ]

    // return an array 
    return (
        <FlatList 
        data={list}   
        renderItem={({ item }) => <Text>{ item.title }</Text>}
        />
    )

}
}

export default SuggestionList